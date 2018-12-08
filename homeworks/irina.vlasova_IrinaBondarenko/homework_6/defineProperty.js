const user = {};
Object.defineProperty(user, 'fullName', {
    configurable: true,
    enumerable: true,
    set: (name) => {
        const a = name.replace(/([A-Za-z])/g, s => s.toLowerCase());
        this.fullName = a.replace(/(^|\s|[-])\S/g, s => s.toUpperCase());
    },
    get: () => this.fullName,
});

Object.defineProperty(user, 'phone', {
    configurable: true,
    enumerable: true,
    set: (number) => {
        this.phone = number.replace(/((?![/+])|(?!^))\D/g, '');
    },
    get: () => this.phone,
});

user.fullName = 'aNna-mAria joHNs';
console.log(user.fullName);
user.phone = '+38(096)-111-22-33';
console.log(user.phone);
user.phone = '38(096)+111b22+33';
console.log(user.phone);
