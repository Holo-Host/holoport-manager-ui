export const fuseNavigationConfig = [
    {
        'id'      : 'health',
        'title'   : 'Health',
        'type'    : 'group',
        'icon'    : 'details',
        'children': [
            {
                'id'   : 'health-intro',
                'title': 'Introduction',
                'type' : 'item',
                'icon' : 'memory',
                'url'  : '/intro'
            },
            {
                'id'   : 'health-dashboard',
                'title': 'Dashboard',
                'type' : 'item',
                'icon' : 'dashboard',
                'url'  : '/apps/dashboards/analytics'
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
        ]
    }

];
