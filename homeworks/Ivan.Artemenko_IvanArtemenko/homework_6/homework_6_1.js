const user = {};
const reg1 = /\b[a-z]/g;
const reg2 = /^\+\d*|\d/g;
Object.defineProperties(user, {
    ollName: {
        get() {
            return this.name;
        },
        set(value) {
            this.name = value.toLowerCase().replace(reg1, str => str.toUpperCase());
        },
        enumerable: true,
        writeble: true,
        configurable: true,
    },
    userPhone: {
        get() {
            return this.phone;
        },
        set(value) {
            this.phone = value.match(reg2).join('');
        },
        enumerable: true,
        writeble: true,
        configurable: true,
    },
});

user.ollName = 'aNNa-maRia Johns';
console.log(user.ollName);
user.userPhone = '+38(096)-448-20-89';
console.log(user.userPhone);
user.userPhone = '+38(096)w448=20+89';
console.log(user.userPhone);
