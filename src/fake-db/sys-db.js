import mock from './mock';

const sys = [
    {
        'id'      : '1',
        'command': 'success',
        'description'  : 'a command that will succeed'
    },
    {
        'id'      : '2',
        'command': 'fail',
        'description'  : 'a command that will fail'
    }
];

mock.onGet('/api/sys').reply((config) => {
    return [200, sys];
});
