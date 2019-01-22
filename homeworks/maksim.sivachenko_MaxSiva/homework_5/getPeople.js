const people = [
    { id: 1, name: 'Nick', friends: [2, 5, 6] },
    { id: 2, name: 'John', friends: [1, 3] },
    { id: 3, name: 'Mike', friends: [2, 5] },
    { id: 4, name: 'Janny', friends: null },
    { id: 5, name: 'Edward', friends: [1, 3] },
    { id: 6, name: 'Jeen', friends: [5, 1] },
];

function getFriends(id) {
    return people.find(x => x.id === id);
}

const getPeople = (userId) => {
    const desired = getFriends(userId);
    const result = [];
    let friends;
    if (desired) {
        ({ friends } = desired);
    } else {
        return null;
    }
    if (friends && friends.length !== 0) {
        friends.forEach((id) => {
            result.push(getFriends(id));
        });
    }
    return result;
};

const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question('Specify id: ', (answer) => {
    if (Number.isNaN(+answer)) {
        console.log('The id you were entered is not correct. Use integers');
    } else {
        console.log(getPeople(+answer));
    }
    rl.close();
});
