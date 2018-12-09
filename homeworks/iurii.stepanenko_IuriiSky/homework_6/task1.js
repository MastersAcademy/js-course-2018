// task fullName
function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

function capitalize(name) {
    let result = name.split(/\W+/).map(element => capitalizeWord(element)).join(' ');
    const hyphen = name.indexOf('-');
    if (hyphen !== -1) {
        result = `${result.substring(0, hyphen)}-${result.substring(hyphen + 1)}`;
    }
    return result;
}

function addUserFullName(keyName, obj) {
    let name;
    Object.defineProperty(obj, keyName, {
        get() {
            return name;
        },
        set(value) {
            name = capitalize(value);
        },
        enumerable: true,
    });
    return obj;
}

// Task phone
function normalizePhone(phone) {
    const result = phone.split(/\D/).join('');
    if (phone[0] === '+') {
        return `+${result}`;
        // return '+' + result;
    }
    return result;
}

function addUserPhone(keyName, obj) {
    let phone;
    Object.defineProperty(obj, keyName, {
        get() {
            return phone;
        },
        set(value) {
            phone = normalizePhone(value);
        },
        enumerable: true,
    });
    return obj;
}

const user = {};
addUserFullName('fullName', user);
addUserPhone('phone', user);
user.fullName = 'aNna-mAria joHNs';
console.log(user.fullName);
user.phone = '+38(096)-111-22-33';
console.log(user.phone);
user.phone = '38(096)+111b22+33';
console.log(user.phone);
