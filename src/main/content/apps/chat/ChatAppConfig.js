import ChatApp from './ChatApp';

export const ChatAppConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/apps/chat',
            component: ChatApp
        }
    ]
};
