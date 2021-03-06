<?php /* Smarty version 2.6.11, created on 2022-02-10 18:16:09
         compiled from modules/DynamicFields/templates/Fields/Forms/coreBottom.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('function', 'sugar_translate', 'modules/DynamicFields/templates/Fields/Forms/coreBottom.tpl', 16, false),array('function', 'html_options', 'modules/DynamicFields/templates/Fields/Forms/coreBottom.tpl', 18, false),array('function', 'sugar_help', 'modules/DynamicFields/templates/Fields/Forms/coreBottom.tpl', 90, false),)), $this); ?>

<?php if ($this->_tpl_vars['hideLevel'] < 5 && $this->_tpl_vars['show_fts']): ?>
<tr>
    <td class='mbLBL'><?php echo smarty_function_sugar_translate(array('module' => 'DynamicFields','label' => 'COLUMN_TITLE_FTS'), $this);?>
:</td>
    <td>
        <?php echo smarty_function_html_options(array('name' => "full_text_search[enabled]",'id' => 'fts_field_config','selected' => $this->_tpl_vars['fts_field_config_selected'],'options' => $this->_tpl_vars['fts_field_config'],'onchange' => "ModuleBuilder.toggleBoost()"), $this);?>

        <img border="0" class="inlineHelpTip" alt="Information" src="themes/Sugar/images/helpInline.png" onclick="return SUGAR.util.showHelpTips(this,'<?php echo $this->_tpl_vars['mod_strings']['LBL_POPHELP_FTS_FIELD_CONFIG']; ?>
','','' );">
    </td>
</tr>
<tr id="ftsFieldBoostRow" <?php if ($this->_tpl_vars['fts_field_config_selected'] < 2): ?>style="display:none"<?php endif; ?>>
    <td class='mbLBL'><?php echo smarty_function_sugar_translate(array('module' => 'DynamicFields','label' => 'COLUMN_TITLE_FTS_BOOST'), $this);?>
:</td>
    <td>
        <input type="text" name="full_text_search[boost]" id="fts_field_boost" value="<?php echo $this->_tpl_vars['fts_field_boost_value']; ?>
" />
        <img border="0" class="inlineHelpTip" alt="Information" src="themes/Sugar/images/helpInline.png" onclick="return SUGAR.util.showHelpTips(this,'<?php echo $this->_tpl_vars['mod_strings']['LBL_POPHELP_FTS_FIELD_BOOST']; ?>
','','' );">
    </td>
</tr>
<?php endif; ?>

<?php if (! $this->_tpl_vars['hideMassUpdate'] && ! $this->_tpl_vars['vardef']['hidemassupdate']): ?>
        <tr id="massUpdateRow" <?php if ($this->_tpl_vars['vardef']['readonly']): ?>style="display: none"<?php endif; ?>>
        <td class='mbLBL' ><?php echo smarty_function_sugar_translate(array('module' => 'DynamicFields','label' => 'COLUMN_TITLE_MASS_UPDATE'), $this);?>
:</td>
        <td>
            <?php if ($this->_tpl_vars['hideLevel'] < 5): ?>
                <input type="checkbox" id="massupdate"  name="massupdate" value="1" <?php if (! empty ( $this->_tpl_vars['vardef']['massupdate'] )): ?>checked<?php endif; ?> onclick="ModuleBuilder.handleFieldInteractions('massupdate')"/>
            <?php else: ?>
                <input type="checkbox" id="massupdate"  name="massupdate" value="1" disabled <?php if (! empty ( $this->_tpl_vars['vardef']['massupdate'] )): ?>checked<?php endif; ?>/>
            <?php endif; ?>
        </td>
    </tr>
<?php endif; ?>

<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => 'modules/DynamicFields/templates/Fields/Forms/coreDependent.tpl', 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>

<tr>
<?php if (! $this->_tpl_vars['hideReportable']): ?>
<td class='mbLBL'><?php echo smarty_function_sugar_translate(array('module' => 'DynamicFields','label' => 'COLUMN_TITLE_REPORTABLE'), $this);?>
:</td>
<td>
	<input type="checkbox" name="reportableCheckbox" value="1" <?php if (! empty ( $this->_tpl_vars['vardef']['reportable'] )): ?>CHECKED<?php endif; ?> <?php if ($this->_tpl_vars['hideLevel'] > 5): ?>disabled<?php endif; ?> 
	onClick="if(this.checked) document.getElementById('reportable').value=1; else document.getElementById('reportable').value=0;"/>
	<input type="hidden" name="reportable" id="reportable" value="<?php if (! empty ( $this->_tpl_vars['vardef']['reportable'] )):  echo $this->_tpl_vars['vardef']['reportable'];  else: ?>0<?php endif; ?>">
</td>
</tr>
<?php endif; ?>

<?php if ($this->_tpl_vars['auditable'] && ! in_array ( $this->_tpl_vars['vardef']['type'] , array ( 'parent' , 'html' ) )): ?>
<tr>
    <td class='mbLBL'><?php echo smarty_function_sugar_translate(array('module' => 'DynamicFields','label' => 'COLUMN_TITLE_AUDIT'), $this);?>
:</td>
    <td>
        <?php if ($this->_tpl_vars['is_relationship_field']): ?>
            <input id="auditedCheckbox" type="checkbox" name="audited" value="1" <?php if (! empty ( $this->_tpl_vars['relationship_field_audited'] ) || ! empty ( $this->_tpl_vars['vardef']['pii'] )): ?>CHECKED<?php endif; ?> <?php if ($this->_tpl_vars['hideLevel'] > 5): ?>disabled<?php endif; ?>/>
            <?php if ($this->_tpl_vars['hideLevel'] > 5): ?>
                <input type="hidden" name="audited" value="<?php echo $this->_tpl_vars['relationship_field_audited']; ?>
">
            <?php endif; ?>
        <?php else: ?>
            <input id="auditedCheckbox" type="checkbox" name="audited" value="1" <?php if (! empty ( $this->_tpl_vars['vardef']['audited'] ) || ! empty ( $this->_tpl_vars['vardef']['pii'] )): ?>CHECKED<?php endif; ?> <?php if ($this->_tpl_vars['hideLevel'] > 5): ?>disabled<?php endif; ?>/>
            <?php if ($this->_tpl_vars['hideLevel'] > 5): ?>
                <input type="hidden" name="audited" value="<?php echo $this->_tpl_vars['vardef']['audited']; ?>
">
            <?php endif; ?>
        <?php endif; ?>
    </td>
</tr>
<?php if (! in_array ( $this->_tpl_vars['vardef']['type'] , array ( 'bool' , 'image' , 'relate' ) )): ?>
<tr>
    <td class='mbLBL'><?php echo smarty_function_sugar_translate(array('module' => 'DynamicFields','label' => 'COLUMN_TITLE_PII'), $this);?>
:</td>
    <td>
        <input id="piiCheckbox"  type="checkbox" onclick="ModuleBuilder.enforceAuditPii()" name="pii" value="1" <?php if (! empty ( $this->_tpl_vars['vardef']['pii'] )): ?>CHECKED<?php endif; ?> <?php if ($this->_tpl_vars['hideLevel'] > 5): ?>disabled<?php endif; ?>/><?php if ($this->_tpl_vars['hideLevel'] > 5): ?><input type="hidden" name="pii" value="<?php echo $this->_tpl_vars['vardef']['pii']; ?>
"><?php endif; ?>
        <img border="0" class="inlineHelpTip" alt="Information" src="themes/Sugar/images/helpInline.png" onclick="return SUGAR.util.showHelpTips(this,'<?php echo $this->_tpl_vars['mod_strings']['LBL_POPHELP_PII']; ?>
','','' );">
    </td>
</tr>
<?php endif;  endif; ?>

<?php if (! $this->_tpl_vars['hideImportable'] && ( ! isset ( $this->_tpl_vars['vardef']['studio']['importable'] ) || isTruthy ( $this->_tpl_vars['vardef']['studio']['importable'] ) )): ?>
<tr><td class='mbLBL'><?php echo smarty_function_sugar_translate(array('module' => 'DynamicFields','label' => 'COLUMN_TITLE_IMPORTABLE'), $this);?>
:</td><td>
    <?php if ($this->_tpl_vars['hideLevel'] < 5): ?>
        <?php echo smarty_function_html_options(array('name' => 'importable','id' => 'importable','selected' => $this->_tpl_vars['vardef']['importable'],'options' => $this->_tpl_vars['importable_options']), $this);?>

        <?php echo smarty_function_sugar_help(array('text' => $this->_tpl_vars['mod_strings']['LBL_POPHELP_IMPORTABLE'],'FIXX' => 250,'FIXY' => 80), $this);?>

    <?php else: ?>
        <?php if (isset ( $this->_tpl_vars['vardef']['importable'] )):  echo $this->_tpl_vars['importable_options'][$this->_tpl_vars['vardef']['importable']]; ?>

        <?php else:  echo $this->_tpl_vars['importable_options']['true'];  endif; ?>
    <?php endif; ?>
</td></tr>
<?php endif;  if (! $this->_tpl_vars['hideDuplicatable'] && ( ! isset ( $this->_tpl_vars['vardef']['studio']['duplicate_merge'] ) || isTruthy ( $this->_tpl_vars['vardef']['studio']['duplicate_merge'] ) )): ?>
<tr><td class='mbLBL'><?php echo smarty_function_sugar_translate(array('module' => 'DynamicFields','label' => 'COLUMN_TITLE_DUPLICATE_MERGE'), $this);?>
:</td><td>
<?php if ($this->_tpl_vars['hideLevel'] < 5): ?>
    <?php echo smarty_function_html_options(array('name' => 'duplicate_merge','id' => 'duplicate_merge','selected' => $this->_tpl_vars['vardef']['duplicate_merge_dom_value'],'options' => $this->_tpl_vars['duplicate_merge_options']), $this);?>

    <?php echo smarty_function_sugar_help(array('text' => $this->_tpl_vars['mod_strings']['LBL_POPHELP_DUPLICATE_MERGE'],'FIXX' => 250,'FIXY' => 80), $this);?>

<?php else: ?>
    <?php if (isset ( $this->_tpl_vars['vardef']['duplicate_merge_dom_value'] )):  echo $this->_tpl_vars['vardef']['duplicate_merge_dom_value']; ?>

    <?php else:  echo $this->_tpl_vars['duplicate_merge_options'][0];  endif;  endif; ?>
</td></tr>
<?php endif; ?>
</table>

<?php if (! empty ( $this->_tpl_vars['vardef']['group'] )): ?>
    <input type="hidden" name="group" value="<?php echo $this->_tpl_vars['vardef']['group']; ?>
">
<?php endif; ?>

<?php if (! empty ( $this->_tpl_vars['vardef']['options'] ) && ! empty ( $this->_tpl_vars['vardef']['type'] ) && $this->_tpl_vars['vardef']['type'] == 'parent_type'): ?>
    <input type="hidden" name="options" value="<?php echo $this->_tpl_vars['vardef']['options']; ?>
">
<?php endif; ?>


<script>
    ModuleBuilder.enforceAuditPii();
</script>