// task 1

const user = {};

Object.defineProperties(user, {
    fullName: {
        set: (text) => {
            this.fullName = text.toLowerCase().replace(/\b\w/g,
                firstCharacter => firstCharacter.toUpperCase());
        },
        get: () => this.fullName,
    },
    phone: {
        set: (numbers) => {
            this.phone = numbers.replace(/(?!^\+)\D+/g, '');
        },
        get: () => this.phone,
    },
});
user.fullName = 'vLaDislAv viTaliJoVich rEsHEtylo';
console.log(user.fullName);
user.phone = '+ 380-936-99-92';
console.log(user.phone);
user.phone = ' 380-936-99-92';
console.log(user.phone);
