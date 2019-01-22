const people = [
    { id: 1, name: 'Nick', friends: [2, 5, 6] },
    { id: 2, name: 'John', friends: [1, 3] },
    { id: 3, name: 'Mike', friends: [2, 5] },
    { id: 4, name: 'Janny', friends: null },
    { id: 5, name: 'Edward', friends: [1, 3] },
    { id: 6, name: 'Jeen', friends: [5, 1] },
];

function getPeople(userId) {
    const user = people.find(person => person.id === userId);
    const result = [];
    if (typeof user === 'undefined') {
        return null;
    }
    if (Array.isArray(user.friends)) {
        return people.filter(person => user.friends.includes(person.id));
    }
    return result;
}

const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question('Please enter user ID: ', (answer) => {
    const responce = parseInt(answer, 10);
    if (Number.isNaN(responce)) {
        console.log('The value you were entered is not correct. Use integers');
    } else {
        console.log(getPeople(Math.round(responce)));
    }
    rl.close();
});
