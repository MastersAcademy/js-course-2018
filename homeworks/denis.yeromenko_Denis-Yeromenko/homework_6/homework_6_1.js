const user = {};
Object.defineProperties(user, {
    fullName: {
        get() {
            return this.userFullName;
        },
        set(value) {
            const re = /\b\w/g;
            this.userFullName = value.trim().toLowerCase().replace(re, str => str.toUpperCase());
        },
    },
    phone: {
        get() {
            return this.userPhone;
        },
        set(value) {
            const re = /^\+[\d]*|\d/g;
            this.userPhone = value.trim().match(re).join('');
        },
    },
});

user.fullName = '  aLi-Ibn-haTab kiziLbek jr.';
console.log(user.fullName);
user.fullName = 'aNna-mAria joHNs';
console.log(user.fullName);
user.phone = '        +32df113256';
console.log(user.phone);
user.phone = '+38(096)-111-22-33';
console.log(user.phone);
user.phone = '38(096)+111b22+33';
console.log(user.phone);
