<?php /* Smarty version 2.6.11, created on 2022-05-09 15:15:02
         compiled from modules/Administration/templates/ShortcutBar.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('function', 'sugar_getjspath', 'modules/Administration/templates/ShortcutBar.tpl', 13, false),array('function', 'sugar_csrf_form_token', 'modules/Administration/templates/ShortcutBar.tpl', 24, false),array('function', 'sugar_translate', 'modules/Administration/templates/ShortcutBar.tpl', 67, false),)), $this); ?>
<script type="text/javascript" src="<?php echo smarty_function_sugar_getjspath(array('file' => 'cache/include/javascript/sugar_grp_yui_widgets.js'), $this);?>
"></script>

<link rel="stylesheet" type="text/css" href="<?php echo smarty_function_sugar_getjspath(array('file' => 'modules/Connectors/tpls/tabs.css'), $this);?>
"/>
<style>.yui-dt-scrollable .yui-dt-bd {overflow-x: hidden;}</style>

<table width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr><td colspan='100'><h2><?php echo $this->_tpl_vars['title']; ?>
</h2></td></tr>
    <tr><td><i class="info"><?php echo $this->_tpl_vars['msg']; ?>
</i></td></tr>
    <tr><td colspan='100'>
        <?php if (empty ( $this->_tpl_vars['msg'] )): ?>
            <form name="ConfigureShortcutBar" method="POST" action="index.php">
<?php echo smarty_function_sugar_csrf_form_token(array(), $this);?>

                <input type="hidden" name="module" value="Administration">
                <input type="hidden" name="action" value="ConfigureShortcutBar">
                <input type="hidden" id="enabled_modules" name="enabled_modules" value="">
                <input type="hidden" name="return_module" value="<?php echo $this->_tpl_vars['RETURN_MODULE']; ?>
">
                <input type="hidden" name="return_action" value="<?php echo $this->_tpl_vars['RETURN_ACTION']; ?>
">
                <br>
                <p><?php echo $this->_tpl_vars['MOD']['LBL_CONFIGURE_SHORTCUT_BAR_HELP']; ?>
</p>
                <br>
                <table border="0" cellspacing="1" cellpadding="1">
                    <tr>
                        <td>
                            <input title="<?php echo $this->_tpl_vars['APP']['LBL_SAVE_BUTTON_TITLE']; ?>
" accessKey="<?php echo $this->_tpl_vars['APP']['LBL_SAVE_BUTTON_KEY']; ?>
" class="button primary" onclick="SUGAR.saveShortcutBar();" type="button" name="button" value="<?php echo $this->_tpl_vars['APP']['LBL_SAVE_BUTTON_LABEL']; ?>
" >
                            <input title="<?php echo $this->_tpl_vars['APP']['LBL_CANCEL_BUTTON_TITLE']; ?>
" accessKey="<?php echo $this->_tpl_vars['APP']['LBL_CANCEL_BUTTON_KEY']; ?>
" class="button" onclick="parent.SUGAR.App.router.navigate(parent.SUGAR.App.router.buildRoute('<?php echo $this->_tpl_vars['RETURN_MODULE']; ?>
'), <?php echo '{trigger: true}'; ?>
); return false;" type="button" name="button" value="<?php echo $this->_tpl_vars['APP']['LBL_CANCEL_BUTTON_LABEL']; ?>
">
                        </td>
                    </tr>
                </table>
                <div class='add_table' style='margin-bottom:5px'>
                    <table id="ConfigureTabs" class="themeSettings edit view" style='margin-bottom:0px;' border="0" cellspacing="0" cellpadding="0">
                        <tr>
                            <td width='1%'><div id="enabled_div"></div></td>
                            <td><div id="disabled_div"></div></td>
                        </tr>
                    </table>
                </div>
                <table border="0" cellspacing="1" cellpadding="1">
                    <tr>
                        <td>
                            <input title="<?php echo $this->_tpl_vars['APP']['LBL_SAVE_BUTTON_TITLE']; ?>
" class="button primary" onclick="SUGAR.saveShortcutBar();" type="button" name="button" value="<?php echo $this->_tpl_vars['APP']['LBL_SAVE_BUTTON_LABEL']; ?>
" >
                            <input title="<?php echo $this->_tpl_vars['APP']['LBL_CANCEL_BUTTON_TITLE']; ?>
" accessKey="<?php echo $this->_tpl_vars['APP']['LBL_CANCEL_BUTTON_KEY']; ?>
" class="button" onclick="parent.SUGAR.App.router.navigate(parent.SUGAR.App.router.buildRoute('<?php echo $this->_tpl_vars['RETURN_MODULE']; ?>
'), <?php echo '{trigger: true}'; ?>
); return false;" type="button" name="button" value="<?php echo $this->_tpl_vars['APP']['LBL_CANCEL_BUTTON_LABEL']; ?>
">
                        </td>
                    </tr>
                </table>
            </form>
        <script type="text/javascript">
            (function(){
                var Connect = YAHOO.util.Connect;
                Connect.url = 'index.php';
                Connect.method = 'POST';
                Connect.timeout = 300000;

                var enabled_modules = <?php echo $this->_tpl_vars['enabled_modules']; ?>
;
                var disabled_modules = <?php echo $this->_tpl_vars['disabled_modules']; ?>
;
                var lblEnabled = '<?php echo smarty_function_sugar_translate(array('label' => 'LBL_ACTIVE_MODULES'), $this);?>
';
                var lblDisabled = '<?php echo smarty_function_sugar_translate(array('label' => 'LBL_DISABLED_MODULES'), $this);?>
';
                <?php echo '
                SUGAR.prodEnabledTable = new YAHOO.SUGAR.DragDropTable(
                        "enabled_div",
                        [
                            {key: "label", label: lblEnabled, width: 200, sortable: false},
                            {key: "module", label: lblEnabled, hidden: true}
                        ],
                        new YAHOO.util.LocalDataSource(enabled_modules, {
                            responseSchema: {
                                resultsList: "modules",
                                fields: [
                                    {key: "module"},
                                    {key: "label"}
                                ]
                            }
                        }),
                        {height: "300px"}
                );
                SUGAR.prodDisabledTable = new YAHOO.SUGAR.DragDropTable(
                        "disabled_div",
                        [
                            {key: "label", label: lblDisabled, width: 200, sortable: false},
                            {key: "module", label: lblDisabled, hidden: true}
                        ],
                        new YAHOO.util.LocalDataSource(disabled_modules, {
                            responseSchema: {
                                resultsList: "modules",
                                fields: [
                                    {key: "module"},
                                    {key: "label"}
                                ]
                            }
                        }),
                        {height: "300px"}
                );
                SUGAR.prodEnabledTable.disableEmptyRows = true;
                SUGAR.prodDisabledTable.disableEmptyRows = true;
                SUGAR.prodEnabledTable.addRow({module: "", label: ""});
                SUGAR.prodDisabledTable.addRow({module: "", label: ""});
                SUGAR.prodEnabledTable.render();
                SUGAR.prodDisabledTable.render();

                SUGAR.saveShortcutBar = function() {
                    var enabledTable = SUGAR.prodEnabledTable;
                    var modules = [];
                    for (var i = 0; i < enabledTable.getRecordSet().getLength(); i++) {
                        var data = enabledTable.getRecord(i).getData();
                        if (data.module && data.module != \'\')
                            modules[i] = data.module;
                    }

                    ajaxStatus.showStatus(SUGAR.language.get(\'Administration\', \'LBL_SAVING\'));
                    //YAHOO.SUGAR.MessageBox.show({title:"saving",msg:"Saving",close:false})
                    Connect.asyncRequest(
                            Connect.method,
                            Connect.url,
                            {success: SUGAR.saveCallBack},
                            \'to_pdf=1&module=Administration&action=ConfigureShortcutBar&enabled_modules=\' + YAHOO.lang.JSON.stringify(modules) + \'&csrf_token=\' + SUGAR.csrf.form_token
                    );

                    return true;
                }
                SUGAR.saveCallBack = function(o) {
                    ajaxStatus.flashStatus(SUGAR.language.get(\'app_strings\', \'LBL_DONE\'));
                    var response = YAHOO.lang.trim(o.responseText);
                    if (response === "true") {
                        parent.window.location.reload();
                    }
                    else {
                        YAHOO.SUGAR.MessageBox.show({msg: response});
                    }
                }
            })();
            '; ?>

        </script>
        <?php endif; ?>
    </td></tr>