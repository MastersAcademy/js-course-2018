const people = [
    { id: 1, name: 'Nick', friends: [2, 5, 6] },
    { id: 2, name: 'John', friends: [1, 3] },
    { id: 3, name: 'Mike', friends: [2, 5] },
    { id: 4, name: 'Janny', friends: null },
    { id: 5, name: 'Edward', friends: [1, 3] },
    { id: 6, name: 'Jeen', friends: [5, 1] },
];
const getPeople = (numbId) => {
    const id = numbId;
    const arr = [];
    if ((Object.keys(people).length) >= numbId) {
        people.forEach((element) => {
            if (element.id === id) {
                if (element.friends !== null) {
                    element.friends.forEach((friendsId) => {
                        people.forEach((elem) => {
                            if (elem.id === friendsId) {
                                arr.push(elem);
                            }
                        });
                    });
                    console.log(arr);
                } else {
                    console.log('This user has no friends found.');
                }
            }
        });
    } else {
        console.log('User with this id not found.');
    }
};
getPeople(1);
