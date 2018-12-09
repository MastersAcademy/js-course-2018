const user = {};
const phone = {};
let fullName;
let phoneNumber;
Object.defineProperties(user, {
    fullName: {
        set: (name) => {
            fullName = name.trim().toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
        },
        get() {
            return fullName;
        },
    },
});
Object.defineProperties(phone, {
    phoneNumber: {
        set: (numPhone) => {
            const plusSymbol = /^\D*\+/g;
            const plus = plusSymbol.test(numPhone.trim());
            const value = numPhone.trim().replace(/\D/g, '');
            phoneNumber = plus ? `+${value}` : value;
        },
        get() {
            return phoneNumber;
        },
    },
});
user.fullName = 'aNna-mAria joHNs';
console.log(user.fullName);
user.phone = '+38(096)-111-22-33';
console.log(user.phone);
user.phone = '38(096)-111-22-33';
console.log(user.phone);
