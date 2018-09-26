export const fuseNavigationConfig = [
    {
        'id'      : 'health',
        'title'   : 'Health',
        'type'    : 'group',
        'icon'    : 'details',
        'children': [
            {
                'id'   : 'health-dashboard',
                'title': 'Dashboard',
                'type' : 'item',
                'icon' : 'dashboard',
                'url'  : '/example'
            },
            {
                'id'   : 'health-test',
                'title': 'Test',
                'type' : 'item',
                'icon' : 'memory',
                'url'  : '/test'
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
                'icon' : 'memory',
                'url'  : '/faq'
            },
            {
                'id'   : 'support-chat',
                'title': 'Chat',
                'type' : 'item',
                'icon' : 'chat',
                'url'  : '/test'
            }
        ]
    }

];
