const user = {};
let userName;
let userPhone;
Object.defineProperties(user, {
    fullName: {
        get() {
            return userName;
        },
        set(value) {
            userName = value.toLowerCase().replace(/\b[a-z]/g, str => str.toUpperCase());
        },
    },
    phone: {
        get() {
            return userPhone;
        },
        set(value) {
            userPhone = value.match(/^\+\d*|\d/g).join('');
        },
    },
});

user.fullName = 'aNna-mAria joHNs';
console.log(user.fullName); // => 'Anna-Maria Johns'

user.phone = '+38(096)-111-22-33';
console.log(user.phone); // => '+380961112233';

user.phone = '38(096)+111b22+33';
console.log(user.phone); // => '380961112233';
