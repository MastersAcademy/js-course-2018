function UserInfo() {
    let fullName;
    let phone;
    Object.defineProperties(this, {
        fullName: {
            get() {
                return fullName;
            },
            set(name) {
                fullName = name.trim().toLowerCase().replace(/\s+/g, ' ').replace(/\b\w/g, letter => letter.toUpperCase());
            },
        },

        phone: {
            get() {
                return phone;
            },
            set(phoneNumber) {
                phone = phoneNumber.trim().replace(/(?!^\+)\D+/g, '');
            },
        },
    });
}

const user = new UserInfo();

user.fullName = '  aNna-mAria   teReza    joHNs';
console.log(user.fullName); // => 'Anna-Maria Johns'
user.phone = '+38(096)-111-22-33';
console.log(user.phone); // => '+380961112233';
user.phone = '38(096)+11   -/1b22+33';
console.log(user.phone); // => '380961112233';
