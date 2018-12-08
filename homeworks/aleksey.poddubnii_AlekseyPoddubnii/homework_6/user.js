
const user = {};

Object.defineProperty(user, 'name', {
    set: (input) => {
        this.name = input.toLowerCase().trim().replace(/\b\w/g, name => name.toUpperCase());
    },
    get: () => this.name,
});

const plus = '+';

Object.defineProperty(user, 'phone', {
    set: (phone) => {
        if (phone[0] === '+') {
            this.phone = plus + phone.split(/\D/).join('');
        } else {
            this.phone = phone.split(/\D/).join('');
        }
    },
    get: () => this.phone,
});

user.name = 'aNna-mAria joHNs';
console.log(user.name);

user.name = 'SOMe fOR Test it';
console.log(user.name);

user.phone = '+38(096)-111-22-33';
console.log(user.phone);

user.phone = '38(096)+111b22+33';
console.log(user.phone);
