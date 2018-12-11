const user = {};
// regular first letter in word
const reg1 = /\b[a-z]/g;
// regular first + and all numbers in string
const reg2 = /^\+\d*|\d/g;
Object.defineProperties(user, {
    fullName: {
        get() {
            return this.userName;
        },
        set(value) {
            this.userName = value.toLowerCase().replace(reg1, str => str.toUpperCase());
        },
        enumerable: true,
    },
    phone: {
        get() {
            return this.userPhone;
        },
        set(value) {
            this.userPhone = value.match(reg2).join('');
        },
        enumerable: true,
    },
});

user.fullName = 'aNna-mAria joHNs';
console.log(user.fullName); // => 'Anna-Maria Johns'

user.phone = '+38(096)-111-22-33';
console.log(user.phone); // => '+380961112233';

user.phone = '38(096)+111b22+33';
console.log(user.phone); // => '380961112233';
