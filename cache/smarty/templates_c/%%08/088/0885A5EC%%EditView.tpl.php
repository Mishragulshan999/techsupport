<?php /* Smarty version 2.6.11, created on 2022-03-16 11:49:51
         compiled from include/SugarFields/Fields/Time/EditView.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('function', 'sugarvar', 'include/SugarFields/Fields/Time/EditView.tpl', 13, false),array('modifier', 'cat', 'include/SugarFields/Fields/Time/EditView.tpl', 18, false),)), $this); ?>
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

<table border="0" cellpadding="0" cellspacing="0">
<tr valign="middle">
<td nowrap>
<div id="<?php echo $this->_tpl_vars['idname']; ?>
_time"></div>
<?php if ($this->_tpl_vars['displayParams']['showFormats']): ?>
<span class="timeFormat">{$TIME_FORMAT}</span>
<?php endif; ?>
</td>
</tr>
</table>
<input type="hidden" id="<?php echo $this->_tpl_vars['idname']; ?>
" name="<?php echo $this->_tpl_vars['idname']; ?>
" value="{$fields[<?php echo smarty_function_sugarvar(array('key' => 'name','stringFormat' => true), $this);?>
].value}">
<script type="text/javascript" src="{sugar_getjspath file='include/SugarFields/Fields/Time/Time.js'}"></script>
<script type="text/javascript">

//cleanup because this happens in a screwy order in a quickcreate, and the standard $(document).ready and YUI functions don't work quite right
var timeclosure_<?php echo $this->_tpl_vars['idname']; ?>
 = function(){ldelim}
	var idname = "<?php echo $this->_tpl_vars['idname']; ?>
";
	var timeField = "{$fields[<?php echo smarty_function_sugarvar(array('key' => 'name','stringFormat' => true), $this);?>
].value}";
	var timeFormat = "{$fields[<?php echo smarty_function_sugarvar(array('key' => 'name','stringFormat' => true), $this);?>
].value}";
	var tabIndex = "<?php echo $this->_tpl_vars['tabindex']; ?>
";
	var callback = "<?php echo $this->_tpl_vars['displayParams']['updateCallback']; ?>
";
	
	{literal}
	
	SUGAR.util.doWhen(typeof(Time) != "undefined", function(){
		var combo = new Time(timeField, idname, timeFormat, tabIndex);
		//Render the remaining widget fields
		var text = combo.html(callback);
		document.getElementById(idname + "_time").innerHTML = text;	
	});
	{/literal}
{rdelim}
timeclosure_<?php echo $this->_tpl_vars['idname']; ?>
();
</script>

<script type="text/javascript">
function update_<?php echo $this->_tpl_vars['idname']; ?>
_available() {ldelim}
      YAHOO.util.Event.onAvailable("<?php echo $this->_tpl_vars['idname']; ?>
_time_hours", this.handleOnAvailable, this);
{rdelim}

update_<?php echo $this->_tpl_vars['idname']; ?>
_available.prototype.handleOnAvailable = function(me) {ldelim}
	//Call update for first time to round hours and minute values
	combo_<?php echo $this->_tpl_vars['idname']; ?>
.update();
{rdelim}

var obj_<?php echo $this->_tpl_vars['idname']; ?>
 = new update_<?php echo $this->_tpl_vars['idname']; ?>
_available();
</script>