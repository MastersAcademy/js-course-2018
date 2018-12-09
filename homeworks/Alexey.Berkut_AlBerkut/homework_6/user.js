function User() {
    let fullName;
    let phone;
    Object.defineProperties(this, {
        fullName: {
            set(name) {
                const reName = /\b\w/g;
                fullName = name
                    .toLowerCase()
                    .replace(reName,
                        l => l.toUpperCase());
            },
            get() {
                return fullName;
            },
        },
        phone: {
            set(phoneNum) {
                const rePhone = /(?![/+])\D+/g;
                phone = phoneNum.replace(rePhone, '');
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
