const people = [
    { id: 1, name: 'Nick', friends: [2, 5, 6] },
    { id: 2, name: 'John', friends: [1, 3] },
    { id: 3, name: 'Mike', friends: [2, 5] },
    { id: 4, name: 'Janny', friends: null },
    { id: 5, name: 'Edward', friends: [1, 3] },
    { id: 6, name: 'Jeen', friends: [5, 1] },
    { id: 7 },
];

const getPeople = function (userId) {
    const friendsObj = people.filter(el => el.id === userId)[0];

    if (typeof friendsObj === 'undefined') {
        return null;
    }

    let result = [];
    if (friendsObj.friends) {
        result = people.filter(item => friendsObj.friends.find(el => el === item.id));
    }

    return result;
};

console.log(getPeople(3));
