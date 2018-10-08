import mock from './mock';

const users = [
    {
        'id'      : '1',
        'username': 'One',
        'email'  : 'one@example.com'
    },
    {
        'id'      : '1',
        'username': 'Two',
        'email'  : 'two@example.com'
    },
    {
        'id'      : '1',
        'username': 'Three',
        'email'  : 'three@example.com'
    }
];

mock.onGet('/api/users').reply((config) => {
    return [200, users];
});
