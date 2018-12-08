

const user = {};

let protectedVal;
Object.defineProperty(user, 'fullName', {
    get() {
        return protectedVal;
    },
    set(value) {
        protectedVal = value.toLowerCase().replace(/\b\w/g, i => i.toUpperCase());
    },
    enumerable: true,
    configurable: false,
});

user.fullName = 'aNna-mAria joHNs';
console.log(user.fullName);

let protectedVal2;
Object.defineProperty(user, 'phone', {
    get() {
        return protectedVal2;
    },
    set(value2) {
        const plus = value2.indexOf('+') === 0 ? '+' : '';
        protectedVal2 = plus + value2.replace(/[^\d]/g, '');
    },
    enumerable: true,
    configurable: false,
});

user.phone = '+38(096)-111-22-33';
// user.phone = '38(096)+111b22+33';
console.log(user.phone);
