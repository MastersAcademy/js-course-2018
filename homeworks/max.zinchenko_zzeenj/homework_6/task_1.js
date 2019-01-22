function User() {
    let fullName;
    let phoneNumber;

    Object.defineProperties(this, {
        fullName: {
            get() {
                return fullName;
            },
            set: (str) => {
                fullName = str.trim().toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
            },
        },
    });
    Object.defineProperties(this, {
        phoneNumber: {
            get() {
                return phoneNumber;
            },
            set: (str) => {
                const plusChar = /^\D*\+/g;
                const plus = plusChar.test(str.trim());
                const num = str.trim().replace(/\D/g, '');
                phoneNumber = plus ? `+${num}` : num;
            },
        },
    });
}

const user = new User();
user.fullName = 'aNna-mAria joHNs';
console.log(user.fullName);
user.phoneNumber = '+38(096)-111-22-33';
console.log(user.phoneNumber);
user.phoneNumber = '38(096)+111b22+33';
console.log(user.phoneNumber);
