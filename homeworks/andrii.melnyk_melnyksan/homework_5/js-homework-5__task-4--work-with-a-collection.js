// Create a function getPeople, which returns the array of friends by passed id.
// The source collection is:

const people = [
    { id: 1, name: 'Nick', friends: [2, 5, 6] },
    { id: 2, name: 'John', friends: [1, 3] },
    { id: 3, name: 'Mike', friends: [2, 5] },
    { id: 4, name: 'Janny', friends: null },
    { id: 5, name: 'Edward', friends: [1, 3] },
    { id: 6, name: 'Jeen', friends: [5, 1] },
];

function getPeople(personId) {
    let friendsArray = [];
    const personAccount = people.find(account => account.id === personId);
    if (typeof personAccount === 'undefined') {
        return null;
    }
    if (personAccount.friends === null) {
        return [];
    }
    friendsArray = people.filter(account => personAccount.friends.includes(account.id));
    return friendsArray;
}

const person1 = getPeople(2);
const person2 = getPeople(4);
const person3 = getPeople(100500);

console.log('\narray of friends for person1 with id: 2\n');
console.log(person1);
console.log('\narray of friends for person2 with id: 4\n');
console.log(person2);
console.log('\narray of friends for person3 with id: 100500\n');
console.log(person3);
