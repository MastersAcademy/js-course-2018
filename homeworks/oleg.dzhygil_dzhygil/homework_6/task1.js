function User() {
    let fullName;
    let phone;
    Object.defineProperties(this, {
        fullName: {
            set(value) {
                fullName = value.replace(/([[A-Za-z])\S/g, s => s.toLowerCase()).replace(/(^|\s|[-])\S/g, s => s.toUpperCase());
            },
            get() {
                return fullName;
            },
        },
        phone: {
            set(value) {
                const phoneNum = value.replace(/\D+/g, '');
                phone = (value[0] === '+') ? '+'.concat(phoneNum) : phoneNum;
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
user.phone = '‎‎+38(067)111-22-33';
console.log(user.phone);
user.phone = '38(096)+111b22+33';
console.log(user.phone);
