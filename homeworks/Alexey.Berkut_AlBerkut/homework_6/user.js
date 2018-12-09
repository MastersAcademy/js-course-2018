/* „Some people, when confronted with a problem, think
    "I know, I'll use regular expressions."
    Now they have two problems.“
    -- Jamie Zawinski
*/

const user = {};

Object.defineProperties(user, {
    fullName: {
        set: (name) => {
            this.fullName = name.toLowerCase().replace(/\b\w/g,
                l => l.toUpperCase());
        },
        get: () => this.fullName,
    },
    phone: {
        set: (phoneNum) => {
            this.phone = phoneNum.replace(/(?![/+])\D+/g, '');
        },
        get: () => this.phone,
    },
});

user.fullName = 'aNna-mAria joHNs';
console.log(user.fullName);
user.phone = '+38(096)-111-22-33';
console.log(user.phone);
user.phone = '38(096)-111b-22-33';
console.log(user.phone);
