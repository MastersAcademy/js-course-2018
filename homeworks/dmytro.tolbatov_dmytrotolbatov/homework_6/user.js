function User() {
    let privateFullName;
    let privatePhone;
    Object.defineProperties(this, {
        fullName: {
            get: () => privateFullName,
            set: (value) => {
                privateFullName = value.toLowerCase().replace(/\b\w/g, firstLetter => firstLetter.toUpperCase());
            },
        },
        phone: {
            get: () => privatePhone,
            set: (value) => {
                privatePhone = value.charAt(0) === '+'
                    ? `+${value.replace(/\D/g, '')}`
                    : value.replace(/\D/g, '');
            },
        },
    });
}

const user = new User();
user.fullName = 'aNna-mAria joHNs';
console.log(user.fullName);
user.phone = '+38(096)-111-22-33';
console.log(user.phone); // => '+380961112233';
user.phone = '38(096)+111b22+33';
console.log(user.phone); // => '380961112233';
