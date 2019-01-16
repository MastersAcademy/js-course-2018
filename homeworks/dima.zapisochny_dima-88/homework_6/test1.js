const user = {};

Object.defineProperties(user, {
    fullName: {
        set(value) {
            this.fullNameVal = value.toLowerCase().replace(/\b\w/g, l => l.toUpperCase());
        },
        get() {
            return this.fullNameVal;
        },
        enumerable: true,
        configurable: true,
    },
    phone: {
        set(value) {
            this.phoneVal = value.match(/^\+|\d/g).join('');
        },
        get() {
            return this.phoneVal;
        },
        enumerable: true,
        configurable: true,
    },
});

user.fullName = 'aNna-mAria joHNs';
console.log(user.fullName);

user.phone = '+38(093)-789-44-04';
console.log(user.phone);

user.phone = '38(093)+789b44+04';
console.log(user.phone);
