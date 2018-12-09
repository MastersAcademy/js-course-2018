const user = {};

Object.defineProperties(user, {
    fullName: {
        get() {
            return this.lowerCaseFullName ? this.lowerCaseFullName : '';
        },

        set(value) {
            this.lowerCaseFullName = value.toLowerCase().replace(/\b\w/g, letter => letter.toUpperCase());
        },
        enumerable: true,
        configurable: true,
        writeble: true,
    },
    phone: {
        get() {
            return this.userPhone ? `+${this.userPhone}` : '';
        },
        set(value) {
            this.userPhone = value.replace(/[^\d]/g, '');
        },
        enumerable: true,
        configurable: true,
        writeble: true,
    },
});

user.fullName = 'aNna-mAria joHNs';
console.log(user.fullName); // => 'Anna-Maria Johns'
user.phone = '+38(096)-111-22-33';
console.log(user.phone); // => '+380961112233';
user.phone = '38(096)+111b22+33';
console.log(user.phone); // => '380961112233';
