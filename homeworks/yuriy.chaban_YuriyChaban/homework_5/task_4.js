const people = [
    {
        id: 1,
        name: 'Nick',
        friends: [2, 5, 6],
    },
    {
        id: 2,
        name: 'John',
        friends: [1, 3],
    },
    {
        id: 3,
        name: 'Mike',
        friends: [2, 5],
    },
    {
        id: 4,
        name: 'Janny',
        friends: null,
        // friends: [7, 9],
    },
    {
        id: 5,
        name: 'Edward',
        friends: [1, 3],
    },
    {
        id: 6,
        name: 'Jeen',
        friends: [5, 1],
    },
];

const getPeople = (userId, arrayOfUsers) => {
    const friendsArray = [];
    arrayOfUsers.forEach((obj) => {
        if (obj.friends === null) {
            return;
        }
        obj.friends.forEach((friendId) => {
            if (friendId === null) {
                return;
            }

            friendsArray.push(friendId);

            if (userId > Math.max(friendsArray)) {
                console.log('The Id of friends, that you want to get does not exist in the array of friends!');
            }

            if (friendId === userId) {
                console.log(obj);
            }
        });
    });
};

getPeople(2, people);
// getPeople(100500, people);
