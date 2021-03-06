<?php 
 $GLOBALS["dictionary"]["ACLField"]=array (
  'table' => 'acl_fields',
  'archive' => false,
  'comment' => 'Determine the allowable fields for users',
  'fields' => 
  array (
    'id' => 
    array (
      'name' => 'id',
      'vname' => 'LBL_ID',
      'required' => true,
      'type' => 'id',
      'reportable' => false,
      'comment' => 'Unique identifier',
    ),
    'date_entered' => 
    array (
      'name' => 'date_entered',
      'vname' => 'LBL_DATE_ENTERED',
      'type' => 'datetime',
      'required' => true,
      'comment' => 'Date record created',
    ),
    'date_modified' => 
    array (
      'name' => 'date_modified',
      'vname' => 'LBL_DATE_MODIFIED',
      'type' => 'datetime',
      'required' => true,
      'comment' => 'Date record last modified',
    ),
    'modified_user_id' => 
    array (
      'name' => 'modified_user_id',
      'rname' => 'user_name',
      'id_name' => 'modified_user_id',
      'vname' => 'LBL_MODIFIED',
      'type' => 'assigned_user_name',
      'table' => 'modified_user_id_users',
      'isnull' => 'false',
      'dbType' => 'id',
      'required' => false,
      'len' => 36,
      'reportable' => true,
      'comment' => 'User who last modified record',
    ),
    'created_by' => 
    array (
      'name' => 'created_by',
      'rname' => 'user_name',
      'id_name' => 'created_by',
      'vname' => 'LBL_CREATED',
      'type' => 'assigned_user_name',
      'table' => 'created_by_users',
      'isnull' => 'false',
      'dbType' => 'id',
      'len' => 36,
      'comment' => 'User ID who created record',
    ),
    'name' => 
    array (
      'name' => 'name',
      'type' => 'varchar',
      'vname' => 'LBL_NAME',
      'len' => 150,
      'comment' => 'Name of the allowable action (view, list, delete, edit)',
    ),
    'category' => 
    array (
      'name' => 'category',
      'vname' => 'LBL_CATEGORY',
      'type' => 'varchar',
      'len' => 100,
      'reportable' => true,
      'comment' => 'Category of the allowable action (usually the name of a module)',
    ),
    'aclaccess' => 
    array (
      'name' => 'aclaccess',
      'vname' => 'LBL_ACCESS',
      'type' => 'int',
      'len' => 3,
      'reportable' => true,
      'comment' => 'Number specifying access priority; highest access "wins"',
    ),
    'deleted' => 
    array (
      'name' => 'deleted',
      'vname' => 'LBL_DELETED',
      'type' => 'bool',
      'reportable' => false,
      'comment' => 'Record deletion indicator',
    ),
    'role_id' => 
    array (
      'name' => 'role_id',
      'vname' => 'LBL_ID',
      'required' => true,
      'type' => 'id',
      'reportable' => false,
      'comment' => 'Unique identifier',
    ),
  ),
  'acls' => 
  array (
    'SugarACLAdminOnly' => 
    array (
      'adminFor' => 'Users',
    ),
  ),
  'indices' => 
  array (
    0 => 
    array (
      'name' => 'aclfieldid',
      'type' => 'primary',
      'fields' => 
      array (
        0 => 'id',
      ),
    ),
    1 => 
    array (
      'name' => 'idx_aclfield_role_del',
      'type' => 'index',
      'fields' => 
      array (
        0 => 'role_id',
        1 => 'category',
        2 => 'deleted',
      ),
    ),
    2 => 
    array (
      'name' => 'idx_del_category',
      'type' => 'index',
      'fields' => 
      array (
        0 => 'deleted',
        1 => 'category',
      ),
    ),
  ),
  'custom_fields' => false,
  'has_pii_fields' => false,
  'related_calc_fields' => 
  array (
  ),
);