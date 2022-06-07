<?php /* Smarty version 2.6.11, created on 2022-03-16 11:49:51
         compiled from include/SugarFields/Fields/Datetimecombo/EditView.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('function', 'sugarvar', 'include/SugarFields/Fields/Datetimecombo/EditView.tpl', 13, false),array('modifier', 'cat', 'include/SugarFields/Fields/Datetimecombo/EditView.tpl', 18, false),array('modifier', 'escape', 'include/SugarFields/Fields/Datetimecombo/EditView.tpl', 22, false),)), $this); ?>
{*
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
*}
<?php ob_start();  echo smarty_function_sugarvar(array('key' => 'name'), $this); $this->_smarty_vars['capture']['idname'] = ob_get_contents();  $this->assign('idname', ob_get_contents());ob_end_clean();  if (! empty ( $this->_tpl_vars['displayParams']['idName'] )): ?>
    <?php $this->assign('idname', $this->_tpl_vars['displayParams']['idName']);  endif; ?>

<?php $this->assign('flag_field', ((is_array($_tmp=$this->_tpl_vars['vardef']['name'])) ? $this->_run_mod_handler('cat', true, $_tmp, '_flag') : smarty_modifier_cat($_tmp, '_flag'))); ?>
<table border="0" cellpadding="0" cellspacing="0" class="dateTime">
<tr valign="middle">
<td nowrap>
<input autocomplete="off" type="text" id="<?php echo $this->_tpl_vars['idname']; ?>
_date" value="{$fields[<?php echo smarty_function_sugarvar(array('key' => 'name','stringFormat' => true), $this);?>
].value}" size="11" maxlength="10" title='<?php echo ((is_array($_tmp=$this->_tpl_vars['vardef']['help'])) ? $this->_run_mod_handler('escape', true, $_tmp, 'hexentity') : smarty_modifier_escape($_tmp, 'hexentity')); ?>
' tabindex="<?php echo $this->_tpl_vars['tabindex']; ?>
" onblur="combo_<?php echo $this->_tpl_vars['idname']; ?>
.update();" onchange="combo_<?php echo $this->_tpl_vars['idname']; ?>
.update(); <?php if (isset ( $this->_tpl_vars['displayParams']['updateCallback'] )):  echo $this->_tpl_vars['displayParams']['updateCallback'];  endif; ?>"   <?php if (! empty ( $this->_tpl_vars['displayParams']['accesskey'] )): ?> accesskey='<?php echo $this->_tpl_vars['displayParams']['accesskey']; ?>
' <?php endif; ?> >
{capture assign="other_attributes"}alt="{$APP.LBL_ENTER_DATE}" style="position:relative; top:6px" border="0" id="<?php echo $this->_tpl_vars['idname']; ?>
_trigger"{/capture}
{sugar_getimage name="jscalendar" ext=".gif" other_attributes="$other_attributes"}&nbsp;
<?php if (empty ( $this->_tpl_vars['displayParams']['splitDateTime'] )): ?>
</td>
<td nowrap>
<?php else: ?>
<br>
<?php endif; ?>
<div id="<?php echo $this->_tpl_vars['idname']; ?>
_time_section"></div>
<?php if ($this->_tpl_vars['displayParams']['showNoneCheckbox']): ?>
<script type="text/javascript">
function set_<?php echo $this->_tpl_vars['idname']; ?>
_values(form) {ldelim}
 if(form.<?php echo $this->_tpl_vars['idname']; ?>
_flag.checked)  {ldelim}
	form.<?php echo $this->_tpl_vars['idname']; ?>
_flag.value=1;
	form.<?php echo $this->_tpl_vars['idname']; ?>
.value="";
	form.<?php echo $this->_tpl_vars['idname']; ?>
.readOnly=true;
 {rdelim} else  {ldelim}
	form.<?php echo $this->_tpl_vars['idname']; ?>
_flag.value=0;
	form.<?php echo $this->_tpl_vars['idname']; ?>
.readOnly=false;
 {rdelim}
{rdelim}
</script>
<?php endif; ?>
</td>
</tr>
<?php if ($this->_tpl_vars['displayParams']['showFormats']): ?>
<tr valign="middle">
<td nowrap>
<span class="dateFormat">{$USER_DATEFORMAT}</span>
</td>
<td nowrap>
<span class="dateFormat">{$TIME_FORMAT}</span>
</td>
</tr>
<?php endif; ?>
</table>
<input type="hidden" class="DateTimeCombo" id="<?php echo $this->_tpl_vars['idname']; ?>
" name="<?php echo $this->_tpl_vars['idname']; ?>
" value="{$fields[<?php echo smarty_function_sugarvar(array('key' => 'name','stringFormat' => true), $this);?>
].value}">
<script type="text/javascript" src="{sugar_getjspath file="include/SugarFields/Fields/Datetimecombo/Datetimecombo.js"}"></script>
<script type="text/javascript">
var combo_<?php echo $this->_tpl_vars['idname']; ?>
 = new Datetimecombo("{$fields[<?php echo smarty_function_sugarvar(array('key' => 'name','stringFormat' => true), $this);?>
].value}", "<?php echo $this->_tpl_vars['idname']; ?>
", "{$TIME_FORMAT}", "<?php echo $this->_tpl_vars['tabindex']; ?>
", '<?php echo $this->_tpl_vars['displayParams']['showNoneCheckbox']; ?>
', false, true);
//Render the remaining widget fields
text = combo_<?php echo $this->_tpl_vars['idname']; ?>
.html('<?php echo $this->_tpl_vars['displayParams']['updateCallback']; ?>
');
document.getElementById('<?php echo $this->_tpl_vars['idname']; ?>
_time_section').innerHTML = text;

//Call eval on the update function to handle updates to calendar picker object
eval(combo_<?php echo $this->_tpl_vars['idname']; ?>
.jsscript('<?php echo $this->_tpl_vars['displayParams']['updateCallback']; ?>
'));

//bug 47718: this causes too many addToValidates to be called, resulting in the error messages being displayed multiple times
//    removing it here to mirror the Datetime SugarField, where the validation is not added at this level
//addToValidate('{$form_name}',"<?php echo $this->_tpl_vars['idname']; ?>
_date",'date',false,"<?php echo $this->_tpl_vars['idname']; ?>
");
addToValidateBinaryDependency('{$form_name}', "<?php echo $this->_tpl_vars['idname']; ?>
_hours", 'alpha', false, "{$APP.ERR_MISSING_REQUIRED_FIELDS|strip} {$APP.LBL_HOURS|strip}", "<?php echo $this->_tpl_vars['idname']; ?>
_date");
addToValidateBinaryDependency('{$form_name}', "<?php echo $this->_tpl_vars['idname']; ?>
_minutes", 'alpha', false, "{$APP.ERR_MISSING_REQUIRED_FIELDS|strip} {$APP.LBL_MINUTES|strip}", "<?php echo $this->_tpl_vars['idname']; ?>
_date");
addToValidateBinaryDependency('{$form_name}', "<?php echo $this->_tpl_vars['idname']; ?>
_meridiem", 'alpha', false, "{$APP.ERR_MISSING_REQUIRED_FIELDS|strip} {$APP.LBL_MERIDIEM|strip}", "<?php echo $this->_tpl_vars['idname']; ?>
_date");

YAHOO.util.Event.onDOMReady(function()
{ldelim}

	Calendar.setup ({ldelim}
	onClose : update_<?php echo $this->_tpl_vars['idname']; ?>
,
	inputField : "<?php echo $this->_tpl_vars['idname']; ?>
_date",
	ifFormat : "{$CALENDAR_FORMAT}",
	daFormat : "{$CALENDAR_FORMAT}",
	button : "<?php echo $this->_tpl_vars['idname']; ?>
_trigger",
	singleClick : true,
	step : 1,
	weekNumbers: false,
        startWeekday: {$CALENDAR_FDOW|default:'0'},
	comboObject: combo_<?php echo $this->_tpl_vars['idname']; ?>

	{rdelim});

	//Call update for first time to round hours and minute values
	combo_<?php echo $this->_tpl_vars['idname']; ?>
.update(false);

{rdelim}); 
</script>