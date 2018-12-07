function User() {
    let privateFullName;
    let privatePhone;
    const FIRST_LETTER = /\b\w/g;
    const NOT_DIGITS = /\D/g;

    Object.defineProperties(this, {
        fullName: {
            get: () => privateFullName,
            set: (value) => {
                privateFullName = value.toLowerCase()
                    .replace(FIRST_LETTER, letter => letter.toUpperCase());
            },
        },
        phone: {
            get: () => privatePhone,
            set: (value) => {
                const onlyDigits = value.replace(NOT_DIGITS, '');

                privatePhone = value.charAt(0) === '+'
                    ? `+${onlyDigits}`
                    : onlyDigits;
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
