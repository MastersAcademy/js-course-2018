// task 1

const user = {};

Object.defineProperties(user, {
    fullName: {
        set(text) {
            this.newFullName = text.toLowerCase().replace(/\b\w/g,
                firstCharacter => firstCharacter.toUpperCase());
        },
        get() {
            return this.newFullName;
        },
    },
    phone: {
        set(numbers) {
            this.newPhone = numbers.replace(/(?!^\+)\D+/g, '');
        },
        get() {
            return this.newPhone;
        },
    },
});
user.fullName = 'vLaDislAv viTaliJoVich rEsHEtylo';
console.log(user.fullName);
user.phone = '+ 380-936-99-92';
console.log(user.phone);
user.phone = ' 380-936-99-92';
console.log(user.phone);
