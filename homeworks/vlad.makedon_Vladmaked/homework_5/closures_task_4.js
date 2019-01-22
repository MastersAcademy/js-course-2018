const people = [
    { id: 1, name: 'Nick', friends: [2, 5, 6] },
    { id: 2, name: 'John', friends: [1, 3] },
    { id: 3, name: 'Mike', friends: [2, 5] },
    { id: 4, name: 'Janny', friends: null },
    { id: 5, name: 'Edward', friends: [1, 3] },
    { id: 6, name: 'Jeen', friends: [5, 1] },
];

function getKeys(object) {
    const keys = Object.keys(object);
    return keys;
}

function getPeople(userId) {
    const arr = [];
    people.forEach((person) => {
        getKeys(person).forEach((keyPerson) => {
            if (keyPerson === 'id' && person.id === userId && person.friends != null) {
                person.friends.forEach((keyFriends) => {
                    arr.push(people[keyFriends - 1]);
                });
            }
        });
    });
    console.log(arr);
}

getPeople(2);
getPeople(4);
getPeople(100500);
