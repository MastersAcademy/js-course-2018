const people = [
    {
        id: 1,
        name: "Nick",
        friends: [2, 5, 6]
    },
    {
        id: 2,
        name: "John",
        friends: [1, 3]
    },
    {
        id: 3,
        name: "Mike",
        friends: [2, 5]
    },
    {
        id: 4,
        name: "Janny",
        friends: null
    },
    {
        id: 5,
        name: "Edward",
        friends: [1, 3]
    },
    {
        id: 6,
        name: "Jeen",
        friends: [5, 1]
    }
];

function findFriends(id, arr) {
    function findUser(id, array) {
        return array.find(item => item.id === id);
    }
    function listFriends(friendsIds, arr) {
        return friendsIds
            ? arr.filter(item => friendsIds.includes(item.id))
            : [];
    }
    return findUser(id, arr) ? listFriends(findUser(id, arr).friends, arr) : [];
}

console.log(findFriends(6, people));
