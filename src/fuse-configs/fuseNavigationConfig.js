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
                'url'  : '/example'
            },
            {
                'id'   : 'support-chat',
                'title': 'Chat',
                'type' : 'item',
                'icon' : 'chat',
                'url'  : '/example'
            }
        ]
    }

];
