
const user = {};

function changeString(word) {
    let newWord = '';

    if (word.indexOf('-') + 1) {
        newWord = word.split('-').map(changeString).join('-');
    } else {
        newWord = word[0].toUpperCase() + word.substring(1).toLowerCase();
    }

    return newWord;
}

function addFullName(keyName, obj) {
    let protectedVal;
    Object.defineProperty(obj, keyName, {
        get() {
            return protectedVal;
        },
        set(value) {
            protectedVal = value.split(' ').map(changeString).join(' ');
        },
        enumerable: true,
    });
    return obj;
}

function addPhone(keyName, obj) {
    let protectedVal;
    Object.defineProperty(obj, keyName, {
        get() {
            return protectedVal;
        },
        set(value) {
            protectedVal = value.match(/^\+|\d/g).join('');
        },
        enumerable: true,
    });
    return obj;
}
addFullName('fullName', user);
user.fullName = 'Anna-Maria Johns';
console.log(user.fullName);

addPhone('phone', user);
user.phone = '+38(096)-111-22-33';
console.log(user.phone);
user.phone = '38(096)+111b22+33';
console.log(user.phone);
