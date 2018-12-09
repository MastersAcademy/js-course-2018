const user = {};
// regular first letter in word
const reg1 = /\b[a-z]/g;
// regular first + and all numbers in string
const reg2 = /^\+\d*|\d/g;
let userName;
let userPhone;
Object.defineProperties(user, {
    fullName: {
        get() {
            return userName;
        },
        set(value) {
            userName = value.toLowerCase().replace(reg1, str => str.toUpperCase());
        },
    },
    phone: {
        get() {
            return userPhone;
        },
        set(value) {
            userPhone = value.match(reg2).join('');
        },
    },
});

user.fullName = 'aNna-mAria joHNs';
console.log(user.fullName); // => 'Anna-Maria Johns'

user.phone = '+38(096)-111-22-33';
console.log(user.phone); // => '+380961112233';

user.phone = '38(096)+111b22+33';
console.log(user.phone); // => '380961112233';
