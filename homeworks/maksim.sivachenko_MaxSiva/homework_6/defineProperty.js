
function capitalizeWord(word) {
    if (word.indexOf('-') + 1) {
        return word.split('-').map(capitalizeWord).join('-');
    }
    return word[0].toUpperCase() + word.substring(1).toLowerCase();
}

function addFullName(keyName, obj) {
    let protectedVal;
    Object.defineProperty(obj, keyName, {
        get() {
            return protectedVal;
        },
        set(value) {
            protectedVal = value.split(' ').map(capitalizeWord).join(' ');
        },
        enumerable: true,
    });
    return obj;
}

const PhoneRegex = /^\+|\d/g;

function addPhone(keyName, obj) {
    let protectedVal;

    Object.defineProperty(obj, keyName, {
        get() {
            return protectedVal;
        },
        set(value) {
            protectedVal = value.match(PhoneRegex).join('');
        },
        enumerable: true,
    });
    return obj;
}
const user = {};

addFullName('fullName', user);
user.fullName = 'Anna-Maria Johns';
console.log(user.fullName);

addPhone('phone', user);
user.phone = '+38(096)-111-22-33';
console.log(user.phone);
user.phone = '38(096)+111b22+33';
console.log(user.phone);
