function addPropertyFullName(keyName, object) {
    let stringValue;
    Object.defineProperty(object, keyName, {
        get() {
            return stringValue;
        },
        set(value) {
            const reg = /\b\w/g;
            stringValue = value.toLowerCase().replace(reg, l => l.toUpperCase());
        },
        enumerable: true,
    });
    return object;
}

function addPropertyPhone(kayName, object) {
    let phoneNumber;
    Object.defineProperty(object, kayName, {
        get() {
            return phoneNumber;
        },
        set(value) {
            const reg = /\D/;
            phoneNumber = `+${value.split(reg).join('')}`;
        },
    });
    return object;
}

let user = addPropertyFullName('fullName', {});
user.fullName = 'aNna-mAria joHNs';
console.log(user.fullName);

user = addPropertyPhone('phone', {});
user.phone = '38(096)-111-22-33';
console.log(user.phone);
user.phone = '38(096)+111b22+33';
console.log(user.phone);
