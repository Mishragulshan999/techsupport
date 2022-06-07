(function(app){app.events.on('app:init',function(){app.plugins.register('MassCollection',['view'],{onAttach:function(){this.on('init',this._initMassCollectionPlugin,this);},_initMassCollectionPlugin:function(){if(!this.meta||!this.meta.selection||this.meta.selection.type!=='multi'){return;}
this.createMassCollection();this._preselectModels();this._initTemplates();this._bindMassCollectionEvents();this.on('render',this._onViewRender,this);},_onViewRender:function(){if(this.collection.length!==0){var event=this._isAllChecked()?'all:checked':'not:all:checked';this.massCollection.trigger(event);this.toggleSelectAllAlert();}},createMassCollection:function(){this.massCollection=this.context.get('mass_collection');if(!this.massCollection){this.massCollection=this.context.get('collection').clone();this.context.set('mass_collection',this.massCollection);}},_preselectModels:function(){this.preselectedModelIds=this.context.get('preselectedModelIds');if(_.isEmpty(this.preselectedModelIds)){return;}
if(!_.isArray(this.preselectedModelIds)){this.preselectedModelIds=[this.preselectedModelIds];}
var preselectedCollection=app.data.createBeanCollection(this.module);preselectedCollection.fetch({fields:['name'],params:{filter:[{'id':{'$in':this.preselectedModelIds}}]},success:_.bind(function(collection){this.addModel(collection.models);},this)});},_bindMassCollectionEvents:function(){this.context.on('mass_collection:add',this.addModel,this);this.context.on('mass_collection:add:all',this.addAllModels,this);this.context.on('mass_collection:remove',this.removeModel,this);this.context.on('mass_collection:remove:all',this.removeAllModels,this);this.context.on('mass_collection:clear',this.clearMassCollection,this);this.context.on('toggleSelectAllAlert',this.toggleSelectAllAlert,this);this.collection.on('reset',function(){if(this.disposed||this.independentMassCollection){return;}
this.clearMassCollection();},this);this.collection.on('add',function(){if(!this.disposed&&!this._isAllChecked()){this.massCollection.trigger('not:all:checked');}},this);},addModel:function(models){models=_.isArray(models)?models:[models];this.massCollection.add(models);if(this._isAllChecked()){this.massCollection.trigger('all:checked');}},addAllModels:function(){if(!this.independentMassCollection){this.massCollection.reset(this.collection.models);}else{this.massCollection.add(this.collection.models);}
this.massCollection.trigger('all:checked');},removeModel:function(models){models=_.isArray(models)?models:[models];this.massCollection.remove(models);if(!this._isAllChecked()){this.massCollection.trigger('not:all:checked');}},removeAllModels:function(){if(!this.independentMassCollection){this.clearMassCollection();}else{this.massCollection.remove(this.collection.models);this.massCollection.trigger('not:all:checked');}},clearMassCollection:function(){this.massCollection.entire=false;this.massCollection.reset();this.massCollection.trigger('not:all:checked');},_isAllChecked:function(){if(this.massCollection.length<this.collection.length){return false;}
var allChecked=_.every(this.collection.models,function(model){return this.massCollection.get(model.id);},this);return allChecked;},toggleSelectAllAlert:function(){var alert;if(!this.collection.length){return;}
var selectedRecordsInPage=_.intersection(this.massCollection.models,this.collection.models);if(selectedRecordsInPage.length===this.collection.length){if(this.collection.next_offset>0){alert=this._buildAlertForEntire();}else{alert=this._buildAlertForReset();}}else if(this.massCollection.entire){alert=this._buildAlertForReset();}
if(alert){this.layout.trigger('list:alert:show',alert);}else{this.layout.trigger('list:alert:hide');}},_buildAlertForReset:function(offset){var self=this;var alert=$('<span></span>').append(this._selectedOffsetTpl({offset:offset,num:this.massCollection.length,all_selected:this.massCollection.length===this.massCollection.maximum}));alert.find('[data-action=clear]').each(function(){var $el=$(this);$el.on('click',function(){self.context.trigger('mass_collection:clear');$el.off('click');});app.accessibility.run($el,'click');});return alert;},_buildAlertForEntire:function(){var self=this;var alert=$('<span></span>').append(this._selectAllTpl({num:this.massCollection.length,link:this._selectAllLinkTpl}));alert.find('[data-action=select-all]').each(function(){var $el=$(this);$el.on('click',function(){self.massCollection.entire=true;self.getTotalRecords();$el.off('click');});app.accessibility.run($el,'click');});return alert;},getTotalRecords:function(){var limit=(this.meta.selection.isLinkAction&&app.config.maxRecordLinkFetchSize)||app.config.maxRecordFetchSize;var fields=['id'];_.each(this.meta.selection.actions,function(button){if(_.isArray(button.related_fields)){fields=_.union(fields,button.related_fields);}},this);var options={fields:fields,limit:limit,filter:this.context.get('collection').filterDef,showAlerts:true,success:_.bind(function(collection){if(_.isEmpty(collection.filterDef)){this.massCollection.maximum=this.massCollection.length;}
this.toggleSelectAllAlert();},this)};_.extend(this.massCollection,{orderBy:this.context.get('collection').orderBy,});this.massCollection.trigger('massupdate:estimate');this.massCollection.fetch(options);},_initTemplates:function(){this._selectedOffsetTpl=app.template.getView('list.selected-offset')||app.template.getView('list.selected-offset',this.module);this._selectAllLinkTpl=new Handlebars.SafeString('<button type="button" class="btn btn-link btn-inline" data-action="select-all">'+
app.lang.get('LBL_LISTVIEW_SELECT_ALL_RECORDS')+'</button>');this._selectAllTpl=app.template.compile(null,app.lang.get('TPL_LISTVIEW_SELECT_ALL_RECORDS'));return this;},onDetach:function(){$(window).off('resize.'+this.cid);this.context.off('mass_collection:add',null,this);this.context.off('mass_collection:add:all',null,this);this.context.off('mass_collection:remove',null,this);this.context.off('mass_collection:remove:all',null,this);this.context.off('toggleSelectAllAlert',null,this);this.context.off('mass_collection:clear',null,this);}});});})(SUGAR.App);