const user = {};

Object.defineProperties(user, {
    fullName: {
        enumerable: true,
        configurable: true,
        writeble: true,
        set: (name) => {
            this.fullName = name.replace(/([[A-Za-z])\S/g, s => s.toLowerCase()).replace(/(^|\s|[-])\S/g, s => s.toUpperCase());
        },
        get: () => this.fullName,
    },
    phone: {
        enumerable: true,
        configurable: true,
        writeble: true,
        set: (numPhone) => {
            this.phone = numPhone.replace(/(?![/+])\D+/g, '');
        },
        get: () => this.phone,
    },
});

console.log(user);
user.fullName = 'aNna-mAria joHNs';
console.log(user.fullName);
user.phone = '+38(096)-111-22-33';
console.log(user.phone);
user.phone = '38(096)-111-22-33';
console.log(user.phone);
