(function(app){app.events.on('app:init',function(){app.plugins.register('Tinymce',['field'],{$embeddedInput:null,fileFieldName:null,onAttach:function(component){var self=this;component.on('init',function(){this.fileFieldName=component.options.def.name+'_file';this.$embeddedInput=$('<input />',{name:this.fileFieldName,type:'file'}).hide();},this);component.on('render',function(){component.$el.append(self.$embeddedInput);},this);},onDetach:function(component){this.$embeddedInput.remove();},tinyMCEImagePasteCallback:function(blobInfo,success,failure){var embeddedFile=app.data.createBean('EmbeddedFiles');embeddedFile.save({name:blobInfo.filename()},{success:_.bind(this._savePastedImage,this,blobInfo,success,failure)});},_savePastedImage:function(blobInfo,success,failure,model){var imageData=[{files:[blobInfo.blob()]}];model.uploadFile(this.fileFieldName,imageData,{success:_.bind(function(rsp){var url=app.api.buildFileURL({module:'EmbeddedFiles',id:rsp.record.id,field:this.fileFieldName},{htmlJsonFormat:false,passOAuthToken:false,cleanCache:true,forceDownload:false});success(url);var img=tinymce.activeEditor.selection.getNode().querySelector('img');img.setAttribute('alt',rsp[this.fileFieldName].name);img.setAttribute('width',img.naturalWidth);img.setAttribute('height',img.naturalHeight);},this),error:_.bind(function(){app.alert.show('upload-error',{level:'error',messages:'ERROR_UPLOAD_FAILED'});failure('',{remove:true});},this)});},tinyMCEFileBrowseCallback:function(fieldName,url,type,win){if(_.isUndefined(app.metadata.getModule('EmbeddedFiles'))){return;}
var attributes={fieldName:fieldName,type:type,win:win};this.$embeddedInput.unbind().change(_.bind(this._onEmbededFile,this,attributes));this.$embeddedInput.trigger('click');},_onEmbededFile:function(attributes,event){var $target=$(event.target),fileObj=$target[0].files[0];if(attributes.type==='image'&&fileObj.type.indexOf('image')===-1){this.clearFileInput($target);tinymce.activeEditor.windowManager.alert(app.lang.get('LBL_UPLOAD_ONLY_IMAGE','EmbeddedFiles'));return;}
var embeddedFile=app.data.createBean('EmbeddedFiles');embeddedFile.save({name:fileObj.name},{success:_.bind(this._saveEmbededFile,this,attributes)});},_saveEmbededFile:function(attributes,model){model.uploadFile(this.fileFieldName,this.$embeddedInput,{success:_.bind(function(rsp){var forceDownload=!(rsp[this.fileFieldName]['content-type'].indexOf('image')!==-1);var url=app.api.buildFileURL({module:'EmbeddedFiles',id:rsp.record.id,field:this.fileFieldName},{htmlJsonFormat:false,passOAuthToken:false,cleanCache:true,forceDownload:forceDownload});$(attributes.win.document).find('#'+attributes.fieldName).val(url);if(attributes.type==='image'){this.updateImageData(url);}
this.clearFileInput(this.$embeddedInput);},this),error:_.bind(function(){app.alert.show('upload-error',{level:'error',messages:'ERROR_UPLOAD_FAILED'});this.clearFileInput(this.$embeddedInput);},this)});},clearFileInput:function($field){$field.val('');$field.replaceWith($field.clone(true));},updateImageData:function(url){var win=tinymce.activeEditor.windowManager.windows[0];win.find('#src').value(url).fire('change');}});});})(SUGAR.App);