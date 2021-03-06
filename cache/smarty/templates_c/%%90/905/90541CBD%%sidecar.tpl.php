<?php /* Smarty version 2.6.11, created on 2022-02-07 16:52:38
         compiled from include/MVC/View/tpls/sidecar.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('function', 'sugar_getjspath', 'include/MVC/View/tpls/sidecar.tpl', 20, false),array('function', 'sugar_getscript', 'include/MVC/View/tpls/sidecar.tpl', 28, false),array('modifier', 'cat', 'include/MVC/View/tpls/sidecar.tpl', 63, false),)), $this); ?>

<!DOCTYPE HTML>
<html class="no-js">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">
        <meta charset="UTF-8">
        <title>SugarCRM</title>
        <link rel="shortcut icon" href="<?php echo smarty_function_sugar_getjspath(array('file' => 'themes/default/images/sugar_icon.ico'), $this);?>
">
        <!-- CSS -->
        <link rel="stylesheet" href="styleguide/assets/css/loading.css" type="text/css">
        <link rel="stylesheet" href="styleguide/assets/css/gridstack.css" type="text/css">
        <link rel="stylesheet" href="styleguide/assets/css/gridstack-extra.css" type="text/css">
        <?php $_from = $this->_tpl_vars['css_url']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['url']):
?>
            <link rel="stylesheet" href="<?php echo smarty_function_sugar_getjspath(array('file' => $this->_tpl_vars['url']), $this);?>
"/>
        <?php endforeach; endif; unset($_from); ?>
        <?php echo smarty_function_sugar_getscript(array('file' => "include/javascript/modernizr.js"), $this);?>

    </head>
    <body>
        <div id="sugarcrm">
            <div id="sidecar">
                <div id="alerts" class="alert-top">
                    <div class="alert-wrapper">
                        <div class="alert alert-process">
                            <strong>
                                <div class="loading">
                                    <?php echo $this->_tpl_vars['LBL_LOADING']; ?>
<i class="l1">&#46;</i><i class="l2">&#46;</i><i class="l3">&#46;</i>
                                </div>
                            </strong>
                        </div>
                    </div>
                    <noscript>
                        <div class="alert-top">
                            <div class="alert alert-danger">
                                <strong><?php echo $this->_tpl_vars['LBL_ENABLE_JAVASCRIPT']; ?>
</strong>
                            </div>
                        </div>
                    </noscript>
                </div>
                <div id="header"></div>
                <div id="content"></div>
                <div id="sweetspot"></div>
                <div id="drawers"></div>
                <div id="footer"></div>
            </div>
        </div>
        <!-- App Scripts -->
        <?php echo smarty_function_sugar_getscript(array('file' => "sidecar/minified/sidecar.min.js"), $this);?>

        <script src='<?php echo smarty_function_sugar_getjspath(array('file' => $this->_tpl_vars['sugarSidecarPath']), $this);?>
'></script>
        <script src='<?php echo smarty_function_sugar_getjspath(array('file' => $this->_tpl_vars['SLFunctionsPath']), $this);?>
'></script>
        <!-- <script src='<?php echo smarty_function_sugar_getjspath(array('file' => 'sidecar/minified/sugar.min.js'), $this);?>
'></script> -->
        <script src='<?php echo smarty_function_sugar_getjspath(array('file' => ((is_array($_tmp=$this->_tpl_vars['configFile'])) ? $this->_run_mod_handler('cat', true, $_tmp, '?hash=$configHash') : smarty_modifier_cat($_tmp, '?hash=$configHash'))), $this);?>
'></script>
        <?php echo smarty_function_sugar_getscript(array('file' => "cache/include/javascript/sugar_grp7.min.js"), $this);?>

        <?php echo '
        <script language="javascript">
            var parentIsSugar = false;
            try {
                parentIsSugar = (parent.window != window)
                    && (typeof parent.SUGAR != "undefined")
                    && (typeof parent.SUGAR.App.router != "undefined");
            } catch (e) {
                // if we got here, we were trying to access parent window from different domain
            }
            if (parentIsSugar) {
                parent.SUGAR.App.router.navigate("#Home", {trigger:true});
            } else {
                var App;
                ';  if ($this->_tpl_vars['authorization']): ?>
                let authStore = SUGAR.App.config.authStore || "cache";
                let keyPrefix = (authStore == "cache") ? "<?php echo $this->_tpl_vars['appPrefix']; ?>
" : "";
                let keyValueStore = SUGAR.App[authStore];
                keyValueStore.set(keyPrefix + "AuthAccessToken", "<?php echo $this->_tpl_vars['authorization']['access_token']; ?>
");
                <?php if ($this->_tpl_vars['authorization']['refresh_token']): ?>
                keyValueStore.set(keyPrefix + "AuthRefreshToken", "<?php echo $this->_tpl_vars['authorization']['refresh_token']; ?>
");
                <?php endif; ?>
                if (window.SUGAR.App.config.siteUrl != '') {
                    history.replaceState(null, 'SugarCRM', window.SUGAR.App.config.siteUrl+"/"+window.location.hash);
                } else {
                    history.replaceState(
                            null,
                            'SugarCRM',
                            window.location.origin + window.location.pathname + window.location.hash
                    );
                }
                <?php endif;  echo '
                App = SUGAR.App.init({
                    el: "#sidecar",
                    callback: function(app){
                        app.progress.set(0.6);

                        app.once("app:view:change", function(){
                            // Determine if we need to add a top level class to fix jumping elements in Safari
                            var isSafariBrowser = app.userAgent.browserEngine === \'webkit\';

                            if (isSafariBrowser) {
                                var bodyElement = document.querySelector(\'body\');
                                bodyElement.classList += \' safari-browser\';
                            }

                            app.progress.done();
                        });

                        app.alert.dismissAll();
                        app.start();
                    }
                });
                App.api.debug = App.config.debugSugarApi;
            }
        </script>
        '; ?>


        <?php if (! empty ( $this->_tpl_vars['voodooFile'] )): ?>
            <script src="<?php echo smarty_function_sugar_getjspath(array('file' => $this->_tpl_vars['voodooFile']), $this);?>
"></script>
        <?php endif; ?>
        <?php if (! empty ( $this->_tpl_vars['processAuthorFiles'] )): ?>
            <?php echo smarty_function_sugar_getscript(array('file' => "cache/include/javascript/pmse.utils.min.js"), $this);?>

            <?php echo smarty_function_sugar_getscript(array('file' => "cache/include/javascript/pmse.jcore.min.js"), $this);?>

            <?php echo smarty_function_sugar_getscript(array('file' => "cache/include/javascript/pmse.ui.min.js"), $this);?>

            <?php echo smarty_function_sugar_getscript(array('file' => "cache/include/javascript/pmse.libraries.min.js"), $this);?>

            <?php echo smarty_function_sugar_getscript(array('file' => "cache/include/javascript/pmse.designer.min.js"), $this);?>

        <?php endif; ?>
    </body>
</html>