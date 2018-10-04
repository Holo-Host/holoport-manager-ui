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

const success = "Your command of 'success' succeeded!";
const fail = "Your command of 'fail' failed!";

mock.onGet('/api/sys').reply((config) => {
    return [200, sys];
});

mock.onGet('/api/sys/success').reply((config) => {
    return [200, success];
});

mock.onGet('/api/sys/fail').reply((config) => {
    return [200, fail];
});

mock.onPost('/api/sys/command').reply((request) => {
    console.log(request);
//    const command = JSON.parse(request);

    if((request) === 'success'){
        return [200, success];
    }

    if((request) === 'fail'){
        return [200, fail];
    }
});