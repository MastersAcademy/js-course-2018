function User() {
    let fullName;
    let phone;

    Object.defineProperties(this, {
        fullName: {
            set(value) {
                fullName = value.toLowerCase().replace(/\b\w/g, capitalLetter => capitalLetter.toUpperCase());
            },
            get() {
                return fullName;
            },
        },
        phone: {
            set(value) {
                const phoneNumber = value.replace(/\D+/g, '');
                phone = (value[0] === '+') ? '+'.concat(phoneNumber) : phoneNumber;
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

user.phone = '+38(096)+111b22-33';
console.log(user.phone);

user.phone = '38(096)111$22vs33';
console.log(user.phone);
