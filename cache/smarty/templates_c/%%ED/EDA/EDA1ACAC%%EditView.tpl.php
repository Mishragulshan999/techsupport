<?php /* Smarty version 2.6.11, created on 2022-03-16 11:49:51
         compiled from include/SugarFields/Fields/Bool/EditView.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('function', 'sugarvar', 'include/SugarFields/Fields/Bool/EditView.tpl', 13, false),array('modifier', 'escape', 'include/SugarFields/Fields/Bool/EditView.tpl', 21, false),)), $this); ?>
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
{if strval(<?php echo smarty_function_sugarvar(array('key' => 'value','stringFormat' => 'false'), $this);?>
) == "1" || strval(<?php echo smarty_function_sugarvar(array('key' => 'value','stringFormat' => 'false'), $this);?>
) == "yes" || strval(<?php echo smarty_function_sugarvar(array('key' => 'value','stringFormat' => 'false'), $this);?>
) == "on"} 
{assign var="checked" value="CHECKED"}
{else}
{assign var="checked" value=""}
{/if}
<input type="hidden" name="<?php if (empty ( $this->_tpl_vars['displayParams']['idName'] )):  echo smarty_function_sugarvar(array('key' => 'name'), $this); else:  echo $this->_tpl_vars['displayParams']['idName'];  endif; ?>" value="0"> 
<input type="checkbox" id="<?php if (empty ( $this->_tpl_vars['displayParams']['idName'] )):  echo smarty_function_sugarvar(array('key' => 'name'), $this); else:  echo $this->_tpl_vars['displayParams']['idName'];  endif; ?>" 
name="<?php if (empty ( $this->_tpl_vars['displayParams']['idName'] )):  echo smarty_function_sugarvar(array('key' => 'name'), $this); else:  echo $this->_tpl_vars['displayParams']['idName'];  endif; ?>" 
value="1" title='<?php echo ((is_array($_tmp=$this->_tpl_vars['vardef']['help'])) ? $this->_run_mod_handler('escape', true, $_tmp, 'hexentity') : smarty_modifier_escape($_tmp, 'hexentity')); ?>
' tabindex="<?php echo $this->_tpl_vars['tabindex']; ?>
" <?php if (! empty ( $this->_tpl_vars['displayParams']['accesskey'] )): ?> accesskey='<?php echo $this->_tpl_vars['displayParams']['accesskey']; ?>
' <?php endif; ?>
{$checked} <?php echo $this->_tpl_vars['displayParams']['field']; ?>
>