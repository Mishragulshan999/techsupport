<?php /* Smarty version 2.6.11, created on 2022-02-17 15:46:29
         compiled from modules/Studio/wizards/RenameModules.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('function', 'sugar_csrf_form_token', 'modules/Studio/wizards/RenameModules.tpl', 58, false),array('function', 'html_options', 'modules/Studio/wizards/RenameModules.tpl', 65, false),array('function', 'sugar_help', 'modules/Studio/wizards/RenameModules.tpl', 66, false),array('function', 'counter', 'modules/Studio/wizards/RenameModules.tpl', 86, false),array('modifier', 'escape', 'modules/Studio/wizards/RenameModules.tpl', 81, false),array('modifier', 'default', 'modules/Studio/wizards/RenameModules.tpl', 106, false),)), $this); ?>


<?php echo '
<style type=\'text/css\'>
    .slot
    {
        border-width:1px;border-color:#999999;border-style:solid;padding:0px 1px 0px 1px;margin:2px;cursor:move;
    }

    .slotB
    {
        border-width:0;cursor:move;
    }
    div.moduleTitle
    {
        margin-bottom: 5px;
    }
</style>
'; ?>


<table width="100%" border="0" cellspacing="0" cellpadding="0">
	<tr>
		<td>
           <?php echo $this->_tpl_vars['title']; ?>

<table cellspacing="2">
    <tr>
        <td colspan="3"><?php echo $this->_tpl_vars['MOD']['LBL_RENAME_MOD_SAVE_HELP']; ?>
</td>
    </tr>
    <tr><td>&nbsp;</td></tr>
    <tr>
        <td colspan="3">
            <input type="button" class="button primary" value="<?php echo $this->_tpl_vars['MOD']['LBL_BTN_SAVE']; ?>
" id="renameSaveBttn" onclick='validateForm();'name="<?php echo $this->_tpl_vars['MOD']['LBL_BTN_SAVE']; ?>
" />
            <input type="button" class="button" value="<?php echo $this->_tpl_vars['MOD']['LBL_BTN_CANCEL']; ?>
"  id="renameCancelBttn" name="<?php echo $this->_tpl_vars['MOD']['LBL_BTN_CANCEL']; ?>
" onclick="document.editdropdown.action.value='index'; document.editdropdown.module.value='Administration';document.editdropdown.submit()" />
        </td>
    </tr>
</table>
<div style="height:10px">&nbsp;</div>
<table width="100%" border="0" cellspacing="0" cellpadding="0" class='edit view' >
<tr>
    <td>
        <span class='error'><?php echo $this->_tpl_vars['error']; ?>
</span>
        <table>
            <tr>
                <td colspan='2'>
                    <form method='post' action='index.php' name='dropdownsform'>
<?php echo smarty_function_sugar_csrf_form_token(array(), $this);?>

                        <input type='hidden' name='action' value='wizard'>
                        <input type='hidden' name='wizard' value='RenameModules'>
                        <input type='hidden' name='option' value='EditDropdown'>
                        <input type='hidden' name='module' value='Studio'>
                        <input type='hidden' name='dropdown_name' value='<?php echo $this->_tpl_vars['dropdown_name']; ?>
'>
                        <?php echo $this->_tpl_vars['MOD']['LBL_TABGROUP_LANGUAGE']; ?>
 &nbsp;
                        <?php echo smarty_function_html_options(array('name' => 'dropdown_lang','options' => $this->_tpl_vars['dropdown_languages'],'selected' => $this->_tpl_vars['dropdown_lang'],'onchange' => "document.dropdownsform.submit();"), $this);?>

                        <?php echo smarty_function_sugar_help(array('text' => $this->_tpl_vars['MOD']['LBL_LANGUAGE_TOOLTIP']), $this);?>

                    </form>
                </td>
            </tr>
        </table>
    </td>
</tr>
<tr>
    <td>
<form method='post' action='index.php' name='editdropdown'>
<?php echo smarty_function_sugar_csrf_form_token(array(), $this);?>

<input type='hidden' name='action' value='wizard'>
<input type='hidden' name='wizard' value='RenameModules'>
<input type='hidden' name='option' value='SaveDropDown'>
<input type='hidden' name='module' value='Studio'>
<input type='hidden' name='dropdown_lang' value='<?php echo ((is_array($_tmp=$this->_tpl_vars['dropdown_lang'])) ? $this->_run_mod_handler('escape', true, $_tmp, 'html', 'UTF-8') : smarty_modifier_escape($_tmp, 'html', 'UTF-8')); ?>
'>
<input type='hidden' name='dropdown_name' value='moduleList'>

<table name='tabDropdown' id='tabDropdown'>

<?php echo smarty_function_counter(array('start' => 0,'name' => 'rowCounter','print' => false,'assign' => 'rowCounter'), $this);?>

<?php $_from = $this->_tpl_vars['dropdown']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['key'] => $this->_tpl_vars['value']):
?>
<tr>
    <td>
        <span id='slot<?php echo $this->_tpl_vars['rowCounter']; ?>
b' class="<?php echo $this->_tpl_vars['value']['module']; ?>
">
            <span class="<?php echo $this->_tpl_vars['value']['module']; ?>
-edit rename-slot-button" onclick='prepChangeDropDownValue(<?php echo $this->_tpl_vars['rowCounter']; ?>
, document.getElementById("slot<?php echo $this->_tpl_vars['rowCounter']; ?>
_value"));'><?php echo $this->_tpl_vars['editImage']; ?>
</span>
            &nbsp;
            <span class="<?php echo $this->_tpl_vars['value']['module']; ?>
-title rename-slot-title" id ='slot<?php echo $this->_tpl_vars['rowCounter']; ?>
_value' onclick='prepChangeDropDownValue(<?php echo $this->_tpl_vars['rowCounter']; ?>
, this);'><?php echo $this->_tpl_vars['value']['lang']; ?>
</span>
            <span id='slot<?php echo $this->_tpl_vars['rowCounter']; ?>
_textspan' style='display:none;'><?php echo $this->_tpl_vars['value']['user_lang']; ?>

                <table style="margin-left:15px;">
                    <tr>
                        <td align="right"><?php echo $this->_tpl_vars['MOD']['LBL_SINGULAR']; ?>
</td>
                        <td align="left"><input class="<?php echo $this->_tpl_vars['value']['module']; ?>
-singular rename-label-singular" id='slot<?php echo $this->_tpl_vars['rowCounter']; ?>
_stext' value='<?php echo $this->_tpl_vars['value']['singular']; ?>
' onchange='setSingularDropDownValue(<?php echo $this->_tpl_vars['rowCounter']; ?>
);' type='text'></td>
                    </tr>
                    <tr>
                        <td align="right"><?php echo $this->_tpl_vars['MOD']['LBL_PLURAL']; ?>
</td>
                        <td align="left"><input class="<?php echo $this->_tpl_vars['value']['module']; ?>
-plural rename-label-plural" id='slot<?php echo $this->_tpl_vars['rowCounter']; ?>
_text' value='<?php echo $this->_tpl_vars['value']['lang']; ?>
' type='text'  onchange='setDropDownValue(<?php echo $this->_tpl_vars['rowCounter']; ?>
, this.value, true)' ></td>
                    </tr>
                </table>
                <input name='slot_<?php echo $this->_tpl_vars['rowCounter']; ?>
' id='slot_<?php echo $this->_tpl_vars['rowCounter']; ?>
' value='<?php echo $this->_tpl_vars['rowCounter']; ?>
' type = 'hidden'>
                <input type='hidden' name='key_<?php echo $this->_tpl_vars['rowCounter']; ?>
' id='key_<?php echo $this->_tpl_vars['rowCounter']; ?>
' value='<?php echo ((is_array($_tmp=@$this->_tpl_vars['key'])) ? $this->_run_mod_handler('default', true, $_tmp, 'BLANK') : smarty_modifier_default($_tmp, 'BLANK')); ?>
'>
                <input type='hidden' id='delete_<?php echo $this->_tpl_vars['rowCounter']; ?>
' name='delete_<?php echo $this->_tpl_vars['rowCounter']; ?>
' value='0'>
                <input type='hidden' id='slot<?php echo $this->_tpl_vars['rowCounter']; ?>
_key' name='slot<?php echo $this->_tpl_vars['rowCounter']; ?>
_key' value='<?php echo $this->_tpl_vars['key']; ?>
'>
                <input name='value_<?php echo $this->_tpl_vars['rowCounter']; ?>
' id='value_<?php echo $this->_tpl_vars['rowCounter']; ?>
' value='<?php echo $this->_tpl_vars['value']['lang']; ?>
' type = 'hidden'>
                <input name='svalue_<?php echo $this->_tpl_vars['rowCounter']; ?>
' id='svalue_<?php echo $this->_tpl_vars['rowCounter']; ?>
' value='<?php echo $this->_tpl_vars['value']['singular']; ?>
' type = 'hidden'>
            </span>
        </span>
    </td>
</tr>
<?php echo smarty_function_counter(array('name' => 'rowCounter'), $this);?>

<?php endforeach; endif; unset($_from); ?>

</table>
</table>

<?php echo '
<script>
    // Ping app in parent frame to check for metadata updates
    // this will cause module renames to be reflected on save
    // in the parent frames header menu etc
    // Get the parent api object
    // Also there is case where no parent window (Rename Module opened in new browser\'s tab)
    if (typeof parent.SUGAR.App !== \'undefined\') {
        var api = parent.SUGAR.App.api;
        // Call the ping api
        api.call(\'read\', api.buildURL(\'ping\'));
    }

    var lastField = \'\';
    var lastRowCount = -1;
    var inputsWithErrors = [];
    function prepChangeDropDownValue(rowCount, field)
    {
        var tempLastField = lastField;
        if(lastRowCount != -1)
        {
            //Check for validation errors first
            if(checkForErrors(lastRowCount))
                return true;

            collapseRow(lastRowCount);
        }
        if(tempLastField == field)
            return;
        lastField = field;
        lastRowCount = rowCount;

        field.style.display="none";

        var textspan =  document.getElementById(\'slot\' + rowCount + \'_textspan\');
        var text = document.getElementById("slot" + rowCount + "_text");
        textspan.style.display=\'inline\'
        text.focus();
    }

    function checkElementForErrors(el)
    {
        var formName = \'editdropdown\';

        if( YAHOO.lang.trim(el.value) == "")
        {
            var errorMessage = SUGAR.language.get(\'app_strings\', \'ERR_MISSING_REQUIRED_FIELDS\');
            add_error_style(formName, el, errorMessage, true);
            return true;
        }
        else
        {
            remove_error_style(formName, el);
            return false;
        }
    }

    function checkForErrors(rowCount)
    {
        var foundErrors = false;
        var el1 = document.getElementById("slot" + rowCount + "_text");
        var el2 = document.getElementById("slot" + rowCount + "_stext");

        if( checkElementForErrors(el1) )
        {
            foundErrors = true;
        }

        if( checkElementForErrors(el2) )
        {
            foundErrors = true;
        }

        return foundErrors;
    }

    /*
        scrub input for bug 50607: able to enter HTML/JS and execute through module renaming.
     */
    function cleanModuleName(val)
    {
        return YAHOO.lang.escapeHTML(val);
    }

    /*
        pulled out routine to keep scrubbing from being called multiple times
     */
    function collapseRow(rowCount)
    {
        var text =  document.getElementById(\'slot\' + rowCount + \'_text\');
        var textspan =  document.getElementById(\'slot\' + rowCount + \'_textspan\');
        var span = document.getElementById(\'slot\' + rowCount + \'_value\');
        textspan.style.display = \'none\';
        span.style.display = \'inline\';
        lastField = \'\';
        lastRowCount = -1;
    }

    function setSingularDropDownValue(rowCount)
    {
        document.getElementById(\'svalue_\'+ rowCount).value = document.getElementById(\'slot\' + rowCount + \'_stext\').value;
    }

    function setDropDownValue(rowCount, val, collapse)
    {
        //Check for validation errors first
        if(checkForErrors(rowCount))
            return true;

        document.getElementById(\'value_\' + rowCount).value = val;

        var span = document.getElementById(\'slot\' + rowCount + \'_value\');
        if(collapse)
        {
            span.innerHTML  = cleanModuleName(val);
            collapseRow(rowCount);
        }

        setSingularDropDownValue(rowCount);
    }

    var slotCount = ';  echo $this->_tpl_vars['rowCounter'];  echo ';
    var yahooSlots = [];

    function validateForm()
    {
        for(i=0;i<slotCount;i++)
        {
            if( checkForErrors(i) )
            {
                //Highlight dropdown value if we find an error.
                prepChangeDropDownValue(i,  document.getElementById("slot"+i+"_value"));
                return;
            }
        }

        if(check_form("editdropdown"))
        {
            document.editdropdown.submit();
        }

    }
</script>
'; ?>



<div id='logDiv' style='display:none'>
</div>

<input type='hidden' name='use_push' value='1'>
</form>
</td></tr>
</table>