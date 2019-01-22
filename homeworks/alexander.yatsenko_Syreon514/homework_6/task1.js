function createUser(user) {
    let nameProtected;
    let phoneProtected;
    Object.defineProperties(user, {
        fullName: {
            configurable: true,
            enumerable: true,
            set(newValue) {
                nameProtected = newValue.toLowerCase().replace(/\b\w/g, firstSymbol => firstSymbol.toUpperCase());
            },
            get() {
                return nameProtected;
            },
        },
        phone: {
            configurable: true,
            enumerable: true,
            set(newValue) {
                phoneProtected = `+${newValue.split(/\D/).join('')}`;
            },
            get() {
                return phoneProtected;
            },
        },
    });
    return user;
}

const user = createUser({});

user.fullName = 'aNna-mAria joHNs';
console.log(user.fullName); // => 'Anna-Maria Johns'
user.phone = '+38(096)-111-22-33';
console.log(user.phone); // => '+380961112233';
user.phone = '38(096)+111b22+33';
console.log(user.phone); // => '380961112233';
