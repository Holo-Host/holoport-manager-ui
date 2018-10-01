import Users from './Users';

export const UsersConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/users',
            component: Users
        }
    ]
};
