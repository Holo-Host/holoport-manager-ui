import mock from './mock';

const faqDB = [
    {
        'id'      : '1',
        'question': 'Proident tempor est nulla irure ad est?',
        'answer'  : 'Id nulla nulla proident deserunt deserunt proident in quis. Cillum reprehenderit labore id anim laborum.'
    },
    {
        'id'      : '2',
        'question': 'Ullamco duis commodo sint ad aliqua aute?',
        'answer'  : 'Sunt laborum enim nostrud ea fugiat cillum mollit aliqua exercitation ad elit.'
    },
    {
        'id'      : '3',
        'question': 'Eiusmod non occaecat pariatur Lorem in ex?',
        'answer'  : 'Nostrud anim mollit incididunt qui qui sit commodo duis. Anim amet irure aliquip duis nostrud sit quis fugiat ullamco non dolor labore. Lorem sunt voluptate laboris culpa proident. Aute eiusmod aliqua exercitation irure exercitation qui laboris mollit occaecat eu occaecat fugiat.'
    },
    {
        'id'      : '4',
        'question': 'Lorem magna cillum consequat consequat mollit?',
        'answer'  : 'Velit ipsum proident ea incididunt et. Consectetur eiusmod laborum voluptate duis occaecat ullamco sint enim proident.'
    },
    {
        'id'      : '5',
        'question': 'Quis irure cupidatat ad consequat reprehenderit excepteur?',
        'answer'  : 'Esse nisi mollit aliquip mollit aute consequat adipisicing. Do excepteur dolore proident cupidatat pariatur irure consequat incididunt.'
    }

];

mock.onGet('/api/faq').reply((config) => {
    return [200, faqDB];
});
