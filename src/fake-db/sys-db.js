import mock from './mock';

const sys = [
    {
        'id'      : '1',
        'command': 'command-one',
        'description'  : 'Id holo holo proident deserunt deserunt proident in quis. Cillum reprehenderit labore id anim laborum.'
    },
    {
        'id'      : '2',
        'command': 'command-two',
        'description'  : 'Sunt laborum enim nostrud ea fugiat cillum mollit aliqua exercitation ad elit.'
    },
    {
        'id'      : '3',
        'command': 'command-three',
        'description'  : 'Nostrud anim mollit incididunt qui qui sit commodo duis. Anim amet irure aliquip duis nostrud sit quis fugiat ullamco non dolor labore. Lorem sunt voluptate laboris culpa proident. Aute eiusmod aliqua exercitation irure exercitation qui laboris mollit occaecat eu occaecat fugiat.'
    },
    {
        'id'      : '4',
        'command': 'command-four',
        'description'  : 'Velit ipsum proident ea incididunt et. Consectetur eiusmod laborum voluptate duis occaecat ullamco sint enim proident.'
    },
    {
        'id'      : '5',
        'command': 'command-five',
        'description'  : 'Esse nisi mollit aliquip mollit aute consequat adipisicing. Do excepteur dolore proident cupidatat pariatur irure consequat incididunt.'
    }

];

mock.onGet('/api/sys').reply((config) => {
    return [200, sys];
});
