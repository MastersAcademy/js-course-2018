function User() {
    const reg1 = /\b\w/g;
    const reg2 = /\D+/g;
    let fullName;
    let phone;

    Object.defineProperties(this, {
        fullName: {
            set(value) {
                fullName = value.toLowerCase().replace(reg1,
                    capitalLetter => capitalLetter.toUpperCase());
            },
            get() {
                return fullName;
            },
        },
        phone: {
            set(value) {
                const phoneNumber = value.replace(reg2, '');
                phone = `+${phoneNumber}`;
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
