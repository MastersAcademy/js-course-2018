function User() {
    let fullName;
    let phone;

    Object.defineProperties(this, {
        fullName: {
            get() {
                return fullName;
            },
            set(name) {
                fullName = name.trim().toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
            },
        },
        phone: {
            get() {
                return phone;
            },
            set(phoneNumber) {
                const leadingPlus = /^\D*\+/g;
                const hasLeadingPlus = leadingPlus.test(phoneNumber.trim());
                const number = phoneNumber.trim().replace(/\D/g, '');
                phone = hasLeadingPlus ? `+${number}` : number;
            },
        },
    });
}

const user = new User();

user.fullName = 'aNna-mAria joHNs';
console.log(user.fullName); // => 'Anna-Maria Johns'

user.phone = '+38(096)-111-22-33';
console.log(user.phone); // => '+380961112233';

user.phone = '38(096)+111b22+33';
console.log(user.phone); // => '380961112233';

// this is real name of a real human, you can google it
user.fullName = 'nicholas unless-jesus-christ-had-died-for-thee-thou-hadst-been-damned barbon';
console.log(user.fullName);
// => 'Nicholas Unless-Jesus-Christ-Had-Died-For-Thee-Thou-Hadst-Been-Damned Barbon'

user.phone = ' My phone number: ++380+96then111and+22-+-33_';
console.log(user.phone); // => '+380961112233';
