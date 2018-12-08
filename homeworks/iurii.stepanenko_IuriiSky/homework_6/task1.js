// task fullName
function capitalize(name) {
    const hyphen = name.indexOf('-');
    let result = name.split(/\W+/).map(element => element[0].toUpperCase() + element.slice(1).toLowerCase()).join(' ');
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
    if (phone[0] === '+') {
        return `+${phone.split(/\D/).join('')}`;
    }
    return phone.split(/\D/).join('');
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
