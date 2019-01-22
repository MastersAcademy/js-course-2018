// tesk 1
const user = {};

function changeName(fullName, users) {
    let changefullName;
    Object.defineProperty(users, fullName, {
        get() {
            return changefullName;
        },
        set(value) {
            changefullName = value.toLowerCase().replace(/\b\w/g, name => name.toUpperCase());
        },
        enumerable: true,
        configurable: true,
        writeble: true,
    });
    return users;
}

function cangePhone(phone) {
    let cangesPhone;
    Object.defineProperty(user, phone, {
        get() {
            return cangesPhone;
        },
        set(value) {
            cangesPhone = value.toLowerCase().toLowerCase().replace(/(^\+)|\D*(\d+)\D*/g, (str, plus, num) => (plus) || num);
        },
        enumerable: true,
        configurable: true,
        writeble: true,
    });

    return user;
}

changeName('fullName', user);
user.fullName = 'aNna-mAria joHNs';
console.log(user.fullName);

cangePhone('phone', user);
user.phone = '+38(096)-111-22-33';
console.log(user.phone);
user.phone = '38(096)+111b22+33';
console.log(user.phone);
