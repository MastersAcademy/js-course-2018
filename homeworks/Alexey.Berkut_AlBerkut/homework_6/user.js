const NAME_FILTER = /\b\w/g;
const PHONE_FILTER = /(?![/+])\D+/g;

function User() {
    let fullName;
    let phone;
    Object.defineProperties(this, {
        fullName: {
            set(name) {
                fullName = name.toLowerCase().replace(NAME_FILTER, l => l.toUpperCase());
            },
            get() {
                return fullName;
            },
        },
        phone: {
            set(phoneNum) {
                phone = phoneNum.replace(PHONE_FILTER, '');
            },
            get() {
                return phone;
            },
        },
    });
}

const user = new User();
user.fullName = 'aNna-mAria joHNs';
console.log(user.fullName);
user.phone = '+38(096)-111-22-33';
console.log(user.phone);
user.phone = '38(096)-111b-22-33';
console.log(user.phone);
