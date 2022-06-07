<?php
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

$viewdefs['portal']['layout']['list'] = [
    'components' => [
        [
            'view' => 'list-headerpane',
        ], [
            'layout' => [
                'type' => 'filterpanel',
                'last_state' => [
                    'id' => 'list-filterpanel',
                    'defaults' => [
                        'toggle-view' => 'list',
                    ],
                ],
                'refresh_button' => true,
                'components' => [
                    [
                        'layout' => 'filter',
                        'loadModule' => 'Filters',
                    ], [
                        'view' => 'filter-rows',
                    ], [
                        'view' => 'filter-actions',
                    ],
                ],
            ],
        ], [
            'view' => 'recordlist',
            'primary' => true,
        ], [
            'view' => 'list-bottom',
        ],
    ],
    'type' => 'simple',
    'name' => 'list',
    'span' => 12,
];
