(function(app){app.events.on('app:init',function(){app.plugins.register('TbACLs',['field'],{events:{'click .btn[data-rname=select-team]':'selectTeam'},isTBAEnabled:false,onAttach:function(component,plugin){this.on('init',function(){this.isTBAEnabled=this.isEnabledForModule(this.module);});},selectTeam:function(evt){var index=$(evt.currentTarget).data('index');if(!this.value[index]||!this.value[index].id){return;}
this.toggleSelectedTeam(index);},toggleSelectedTeam:function(index){if(!this.value[index]||!this.value[index].id){return;}
this.value[index].selected=this.value[index].selected?false:true;this._updateAndTriggerChange(this.value);this._toggleSelectedButton(index,this.value[index].selected);},_toggleSelectedButton:function(index,state){var state=state||false,btnName='select-team',btnSelector='.btn[data-rname='+btnName+'][data-index='+index+']',btnIconSelector=btnSelector+' i.fa';if(state){this.$(btnSelector).addClass('active');this.$(btnIconSelector).removeClass('fa-lock').addClass('fa-unlock-alt');}else{this.$(btnSelector).removeClass('active');this.$(btnIconSelector).removeClass('fa-unlock-alt').addClass('fa-lock');}},isEnabledForModule:function(module){if(!_.isUndefined(app.config.teamBasedAcl.enabled)&&!_.isUndefined(app.config.teamBasedAcl.enabledModules)){return app.config.teamBasedAcl.enabled&&(_.indexOf(app.config.teamBasedAcl.enabledModules,module)!==-1);}else{return false;}},onDetach:function(component,plugin){}});});})(SUGAR.App);