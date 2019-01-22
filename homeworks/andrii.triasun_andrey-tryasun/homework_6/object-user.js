const createObjectAndAddKeys = () => {
    const obj = {};
    let protectedFullName;
    let protectedPhone;

    Object.defineProperty(obj, 'fullName', {
        configurable: true,
        enumerable: true,
        get() {
            return protectedFullName;
        },
        set(value) {
            protectedFullName = value
                .trim()
                .toLowerCase()
                .replace(/\b\w/g, char => char.toUpperCase());
        },
    });

    Object.defineProperty(obj, 'phone', {
        configurable: true,
        enumerable: true,
        get() {
            return protectedPhone;
        },
        set(value) {
            protectedPhone = value.trim().replace(/(?!^\+)\D+/g, '');
        },
    });

    return obj;
};

const user = createObjectAndAddKeys();

console.log(user);
user.fullName = 'aNna-mAria joHNs';
console.log(user.fullName);
user.phone = '+38(096)-111-22-33';
console.log(user.phone);
user.phone = '   ++38(096)+111bb22+33  ';
console.log(user.phone);
