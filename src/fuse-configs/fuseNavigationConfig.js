export const fuseNavigationConfig = [
    {
        'id'      : 'Management',
        'title'   : 'Management',
        'type'    : 'group',
        'icon'    : 'details',
        'children': [
            {
                'id'   : 'intro',
                'title': 'Introduction',
                'type' : 'item',
                'icon' : 'memory',
                'url'  : '/intro'
            },
            {
                'id'   : 'health',
                'title': 'Health',
                'type' : 'item',
                'icon' : 'dashboard',
                'url'  : '/intro',
                'badge': {
                    'title': 3,
                    'bg'   : '#F44336',
                    'fg'   : '#FFFFFF'
                }
            },
            {
                'id'   : 'users',
                'title': 'Users',
                'type' : 'item',
                'icon' : 'person',
                'url'  : '/users'
            },
            {
                'id'   : 'system',
                'title': 'System',
                'type' : 'item',
                'icon' : 'chevron_right',
                'url'  : '/system'
            },
            {
                'id'   : 'key',
                'title': 'Access',
                'type' : 'item',
                'icon' : 'vpn_key',
                'url'  : '/access'
            }
        ]
    },
    {
        'id'      : 'support',
        'title'   : 'Support',
        'type'    : 'group',
        'icon'    : 'details',
        'children': [
            {
                'id'   : 'support-faq',
                'title': 'FAQ',
                'type' : 'item',
                'icon' : 'help',
                'url'  : '/pages/faq'
            },
            {
                'id'   : 'support-knowledge-base',
                'title': 'Knowledge Base',
                'type' : 'item',
                'icon' : 'import_contacts',
                'url'  : '/pages/knowledge-base'
            },
            /*
            {
                'id'   : 'support-chat',
                'title': 'Chat',
                'type' : 'item',
                'icon' : 'chat',
                'url'  : '/apps/chat',
                'badge': {
                    'title': 13,
                    'bg'   : 'rgb(9, 210, 97)',
                    'fg'   : '#FFFFFF'
                }
            }
            */
            {
                'id'   : 'coming-soon',
                'title': 'Coming Soon',
                'type' : 'item',
                'icon' : 'alarm',
                'url'  : '/pages/coming-soon'
            },
        ]
    }

];
