const people = [
    { id: 1, name: 'Nick', friends: [2, 5, 6] },
    { id: 2, name: 'John', friends: [1, 3] },
    { id: 3, name: 'Mike', friends: [2, 5] },
    { id: 4, name: 'Janny', friends: null },
    { id: 5, name: 'Edward', friends: [1, 3] },
    { id: 6, name: 'Jeen', friends: [5, 1] },
];

function getFriend(userId) {
    let friend = null;
    people.forEach((person) => {
        if (person.id === userId) {
            if (person.friends !== null) {
                friend = person.friends;
            } else {
                friend = [];
                return friend;
            }
        }
        return {};
    });
    return friend;
}

function getPeople(userId) {
    const friendsMass = getFriend(userId);
    const newFriendsArray = [];
    if (friendsMass !== null && friendsMass !== []) {
        friendsMass.forEach((friendId) => {
            people.forEach((obj) => {
                if (obj.id === friendId) {
                    newFriendsArray.push(obj);
                }
            });
        });
    } else {
        return friendsMass;
    }
    return newFriendsArray;
}

console.log(getPeople(2));
console.log(getPeople(4));
console.log(getPeople(100500));
