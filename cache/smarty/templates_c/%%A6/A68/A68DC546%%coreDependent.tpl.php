<?php /* Smarty version 2.6.11, created on 2022-02-10 18:16:09
         compiled from modules/DynamicFields/templates/Fields/Forms/coreDependent.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('function', 'sugar_translate', 'modules/DynamicFields/templates/Fields/Forms/coreDependent.tpl', 21, false),array('function', 'sugar_help', 'modules/DynamicFields/templates/Fields/Forms/coreDependent.tpl', 27, false),array('modifier', 'escape', 'modules/DynamicFields/templates/Fields/Forms/coreDependent.tpl', 52, false),)), $this); ?>
<?php if ($this->_tpl_vars['vardef']['type'] != 'enum' && $this->_tpl_vars['vardef']['type'] != 'address' && $this->_tpl_vars['vardef']['type'] != 'multienum' && $this->_tpl_vars['vardef']['type'] != 'radioenum' && $this->_tpl_vars['vardef']['type'] != 'html' && $this->_tpl_vars['vardef']['type'] != 'relate' && $this->_tpl_vars['vardef']['type'] != 'url' && $this->_tpl_vars['vardef']['type'] != 'iframe' && $this->_tpl_vars['vardef']['type'] != 'parent' && $this->_tpl_vars['vardef']['type'] != 'image' && $this->_tpl_vars['vardef']['type'] != 'autoincrement' && empty ( $this->_tpl_vars['vardef']['function'] ) && ( ! isset ( $this->_tpl_vars['vardef']['studio']['calculated'] ) || $this->_tpl_vars['vardef']['studio']['calculated'] != false )): ?>

<tr><td class='mbLBL'><?php echo smarty_function_sugar_translate(array('module' => 'DynamicFields','label' => 'LBL_CALCULATED'), $this);?>
:</td>
    <td style="line-height:1em"><input type="checkbox" name="calculated" id="calculated" value="1" onclick ="ModuleBuilder.toggleCF()"
        <?php if (! empty ( $this->_tpl_vars['vardef']['calculated'] ) && ! empty ( $this->_tpl_vars['vardef']['formula'] )): ?>CHECKED<?php endif; ?> <?php if ($this->_tpl_vars['hideLevel'] > 5): ?>disabled<?php endif; ?>/>
		<?php if ($this->_tpl_vars['hideLevel'] > 5): ?>
            <input type="hidden" name="calculated" value="<?php echo $this->_tpl_vars['vardef']['calculated']; ?>
">
        <?php endif; ?>
		<?php echo smarty_function_sugar_help(array('text' => $this->_tpl_vars['mod_strings']['LBL_POPHELP_CALCULATED'],'FIXX' => 250,'FIXY' => 80), $this);?>

		<input type="hidden" name="enforced" id="enforced" value="<?php echo $this->_tpl_vars['vardef']['enforced']; ?>
">
    </td>
</tr>
<tr id='formulaRow' <?php if (empty ( $this->_tpl_vars['vardef']['formula'] )): ?>style="display:none"<?php endif; ?>>
	<td class='mbLBL'><?php echo smarty_function_sugar_translate(array('module' => 'DynamicFields','label' => 'LBL_FORMULA'), $this);?>
:</td>
    <td>
        <input id="formula" type="hidden" name="formula" value="<?php echo $this->_tpl_vars['vardef']['formula']; ?>
" onchange="document.getElementById('formula_display').value = this.value"/>
        <input id="formula_display" type="text" name="formula_display" value="<?php echo $this->_tpl_vars['vardef']['formula']; ?>
" readonly="1" style="background-color:#eee"/>
	    <input type="button" class="button"  name="editFormula" style="margin-top: -2px"
		      value="<?php echo smarty_function_sugar_translate(array('label' => 'LBL_BTN_EDIT_FORMULA'), $this);?>
"
            onclick="ModuleBuilder.moduleLoadFormula(YAHOO.util.Dom.get('formula').value, 'formula', '<?php echo $this->_tpl_vars['calcFieldType']; ?>
')"/>
    </td>
</tr>
<?php endif;  if ($this->_tpl_vars['vardef']['type'] != 'address' && ! $this->_tpl_vars['hideDependent']): ?>
<tr id='depCheckboxRow'><td class='mbLBL'><?php echo smarty_function_sugar_translate(array('module' => 'DynamicFields','label' => 'LBL_DEPENDENT'), $this);?>
:</td>
    <td><input type="checkbox" name="dependent" id="dependent" value="1" onclick ="ModuleBuilder.toggleDF(null, '#popup_form_id .toggleDep')"
        <?php if (! empty ( $this->_tpl_vars['vardef']['dependency'] )): ?>CHECKED<?php endif; ?> <?php if ($this->_tpl_vars['hideLevel'] > 5): ?>disabled<?php endif; ?>/>
        <?php echo smarty_function_sugar_help(array('text' => $this->_tpl_vars['mod_strings']['LBL_POPHELP_DEPENDENT'],'FIXX' => 250,'FIXY' => 80), $this);?>

    </td>
</tr>
<?php if ($this->_tpl_vars['vardef']['type'] !== 'enum' && $this->_tpl_vars['vardef']['type'] !== 'multienum'): ?>
    <tr id='visFormulaRow' <?php if (empty ( $this->_tpl_vars['vardef']['dependency'] )): ?>style="display:none"<?php endif; ?>><td class='mbLBL'><?php echo smarty_function_sugar_translate(array('module' => 'DynamicFields','label' => 'LBL_VISIBLE_IF'), $this);?>
:</td>
        <td>
            <input id="dependency" type="hidden" name="dependency" value="<?php echo ((is_array($_tmp=$this->_tpl_vars['vardef']['dependency'])) ? $this->_run_mod_handler('escape', true, $_tmp, 'html') : smarty_modifier_escape($_tmp, 'html')); ?>
" onchange="document.getElementById('dependency_display').value = this.value"/>
            <input id="dependency_display" type="text" name="dependency_display" value="<?php echo ((is_array($_tmp=$this->_tpl_vars['vardef']['dependency'])) ? $this->_run_mod_handler('escape', true, $_tmp, 'html') : smarty_modifier_escape($_tmp, 'html')); ?>
" readonly="1" style="background-color:#eee"/>
              <input class="button" type=button name="editFormula" value="<?php echo smarty_function_sugar_translate(array('label' => 'LBL_BTN_EDIT_FORMULA'), $this);?>
"
                onclick="ModuleBuilder.moduleLoadFormula(YAHOO.util.Dom.get('dependency').value, 'dependency', 'boolean')"/>
        </td>
    </tr>
<?php endif;  endif;  if ($this->_tpl_vars['vardef']['type'] != 'bool' && ! $this->_tpl_vars['hideRequired']): ?>
    <tr>
        <td class='mbLBL'><?php echo smarty_function_sugar_translate(array('module' => 'DynamicFields','label' => 'COLUMN_TITLE_REQUIRED_OPTION'), $this);?>
:</td>
        <td>
            <input type="checkbox" name="required" id="required" value="1" onclick ="ModuleBuilder.toggleRequiredFormula()"
                   <?php if (! empty ( $this->_tpl_vars['vardef']['required'] )): ?>CHECKED<?php endif; ?> <?php if ($this->_tpl_vars['hideLevel'] > 5): ?>disabled<?php endif; ?>/>
            <?php if ($this->_tpl_vars['hideLevel'] > 5): ?><input type="hidden" name="required" value="<?php echo $this->_tpl_vars['vardef']['required']; ?>
"><?php endif; ?>
            <?php echo smarty_function_sugar_help(array('text' => $this->_tpl_vars['mod_strings']['LBL_POPHELP_REQUIRED'],'FIXX' => 250,'FIXY' => 80), $this);?>

        </td>
    </tr>
    <tr id='requiredFormulaRow' <?php if (empty ( $this->_tpl_vars['vardef']['required'] )): ?>style="display:none"<?php endif; ?>>
        <td class='mbLBL'><?php echo smarty_function_sugar_translate(array('module' => 'DynamicFields','label' => 'LBL_REQUIRED_IF'), $this);?>
:</td>
        <td>
            <input id="required_formula" type="hidden" name="required_formula"
                   value="<?php echo ((is_array($_tmp=$this->_tpl_vars['vardef']['required_formula'])) ? $this->_run_mod_handler('escape', true, $_tmp, 'html') : smarty_modifier_escape($_tmp, 'html')); ?>
"
                   onchange="document.getElementById('required_formula_display').value = this.value"/>
            <input id="required_formula_display" type="text" name="required_formula_display"
                   value="<?php echo ((is_array($_tmp=$this->_tpl_vars['vardef']['required_formula'])) ? $this->_run_mod_handler('escape', true, $_tmp, 'html') : smarty_modifier_escape($_tmp, 'html')); ?>
"
                   readonly="1" style="background-color:#eee"/>
            <input class="button" type=button name="editFormula" value="<?php echo smarty_function_sugar_translate(array('label' => 'LBL_BTN_EDIT_FORMULA'), $this);?>
"
                   onclick="ModuleBuilder.moduleLoadFormula(YAHOO.util.Dom.get('required_formula').value, 'required_formula', 'boolean')"/>
        </td>
    </tr>
<?php endif;  if (! $this->_tpl_vars['hideReadOnly']): ?>
    <tr id='readonlyRow' <?php if ($this->_tpl_vars['vardef']['calculated'] || $this->_tpl_vars['vardef']['massupdate']): ?>style="display:none"<?php endif; ?>>
        <td class='mbLBL'><?php echo smarty_function_sugar_translate(array('module' => 'DynamicFields','label' => 'COLUMN_TITLE_READONLY_OPTION'), $this);?>
:</td>
        <td>
            <input type="checkbox" name="readonly" id="readonly" value="1" onclick="ModuleBuilder.handleFieldInteractions('readonly')"
                   <?php if (! empty ( $this->_tpl_vars['vardef']['readonly'] )): ?>CHECKED<?php endif; ?> <?php if ($this->_tpl_vars['hideLevel'] > 5): ?>disabled<?php endif; ?>/>
            <?php if ($this->_tpl_vars['hideLevel'] > 5): ?><input type="hidden" name="readonly" value="<?php echo $this->_tpl_vars['vardef']['readonly']; ?>
"><?php endif; ?>
            <?php echo smarty_function_sugar_help(array('text' => $this->_tpl_vars['mod_strings']['LBL_POPHELP_READONLY'],'FIXX' => 250,'FIXY' => 80), $this);?>

        </td>
    </tr>
    <tr id='readonlyFormulaRow' <?php if (! $this->_tpl_vars['vardef']['readonly'] || $this->_tpl_vars['vardef']['calculated'] || $this->_tpl_vars['vardef']['massupdate']): ?>style="display:none"<?php endif; ?>>
        <td class='mbLBL'><?php echo smarty_function_sugar_translate(array('module' => 'DynamicFields','label' => 'LBL_READONLY_IF'), $this);?>
:</td>
        <td>
            <input id="readonly_formula" type="hidden" name="readonly_formula"
                   value="<?php echo ((is_array($_tmp=$this->_tpl_vars['vardef']['readonly_formula'])) ? $this->_run_mod_handler('escape', true, $_tmp, 'html') : smarty_modifier_escape($_tmp, 'html')); ?>
"
                   onchange="document.getElementById('readonly_formula_display').value = this.value"/>
            <input id="readonly_formula_display" type="text" name="readonly_formula_display"
                   value="<?php echo ((is_array($_tmp=$this->_tpl_vars['vardef']['readonly_formula'])) ? $this->_run_mod_handler('escape', true, $_tmp, 'html') : smarty_modifier_escape($_tmp, 'html')); ?>
"
                   readonly="1" style="background-color:#eee"/>
            <input class="button" type=button name="editFormula" value="<?php echo smarty_function_sugar_translate(array('label' => 'LBL_BTN_EDIT_FORMULA'), $this);?>
"
                   onclick="ModuleBuilder.moduleLoadFormula(YAHOO.util.Dom.get('readonly_formula').value, 'readonly_formula', 'boolean')"/>
        </td>
    </tr>
<?php endif; ?>