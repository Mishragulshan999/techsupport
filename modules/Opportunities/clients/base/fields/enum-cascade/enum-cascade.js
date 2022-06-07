/*
 * Your installation or use of this SugarCRM file is subject to the applicable
 * terms available at
 * http://support.sugarcrm.com/Resources/Master_Subscription_Agreements/.
 * If you do not agree to all of the applicable terms or do not have the
 * authority to bind the entity as an authorized representative, then do not
 * install or use this SugarCRM file.
 *
 * Copyright (C) SugarCRM Inc. All rights reserved.
 */
/**
 * @class View.Fields.Base.Opportunities.EnumCascadeField
 * @alias SUGAR.App.view.fields.BaseOpportunitiesEnumCascadeField
 * @extends View.Fields.Base.EnumField
 */
({
    extendsFrom: 'EnumField',

    initialize: function(options) {
        this.plugins = _.union(this.plugins || [], ['Cascade']);
        this._super('initialize', [options]);
        this.def.lblString = app.lang.get('LBL_UPDATE_OPPORTUNITIES_RLIS', 'Opportunities') +
            ' ' +
            app.lang.getModuleName('RevenueLineItems', {plural: true});
    },

    /**
     * @inheritdoc
     */
    _loadTemplate: function() {
        if (this.action !== 'edit' && this.action !== 'disabled') {
            this.type = 'enum';
        }
        this._super('_loadTemplate');
        this.type = this.def.type;
    }
})
