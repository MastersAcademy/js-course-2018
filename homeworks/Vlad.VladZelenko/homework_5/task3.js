const book = {
    title: 'The Good Parts',
    author: {
        firstName: 'Douglas',
        lastName: 'Crockford',
    },
};

function innerCopy(obj) {
    const newObj = {};
    Object.keys(obj).forEach((key) => {
        if (typeof (obj[key]) === 'object') {
            newObj[key] = innerCopy(obj[key]);
        } else {
            newObj[key] = obj[key];
        }
    });
    return newObj;
}


const objCopy = innerCopy(book);
objCopy.title = 'Hello';
console.log(objCopy);
console.log(book);
