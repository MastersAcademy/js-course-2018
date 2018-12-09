const user = {};
const plus = '+';
Object.defineProperty(user, 'fullName', {
    set: (input) => {
        this.name = input.toLowerCase().trim().replace(/\b./g, fullName => fullName.toUpperCase());
    },
    get: () => this.name,
});

Object.defineProperty(user, 'phone', {
    set: (phone) => {
        if (phone[0] === '+') {
            this.phone = plus + phone.split(/\D/).join('').trim();
        } else {
            this.phone = phone.split(/\D/).join('').trim();
        }
    },
    get: () => this.phone,
});


user.fullName = 'aNna-mAria joHNs';
console.log(user.fullName); // => 'Anna-Maria Johns'
user.phone = '+38(096)-111-22-33            ';
console.log(user.phone); // => '+380961112233';
user.phone = '38(096)+111b22+33';
console.log(user.phone); // => '380961112233';
