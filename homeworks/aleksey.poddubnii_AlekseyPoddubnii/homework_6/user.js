const a = 'aNna-mAria joHNs';
const b = a.split(/\s+/).join(' ').split(/-/);

console.log(a[0]);
console.log(b);


const user = {};

Object.defineProperty(user, 'name', {
    enumerable: true,
    configurable: true,
    writeble: true,
    set: (input) => {
        this.name = input.toLowerCase().split(/\s+/);
    },
    get: () => this.name,
});

const plus = '+';

Object.defineProperty(user, 'phone', {
    enumerable: true,
    configurable: true,
    writeble: true,
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

user.phone = '+38(096)-111-22-33';
console.log(user.phone);

user.phone = '38(096)+111b22+33';
console.log(user.phone);
