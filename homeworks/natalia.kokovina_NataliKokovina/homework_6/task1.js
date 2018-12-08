function addProtectedKey(firstKey, secondKey, user) {
    let protectedVal;
    Object.defineProperty(user, firstKey, {
        get() {
            return protectedVal;
        },
        set(value) {
            protectedVal = value.toLowerCase().replace(/\b\w/g, l => l.toUpperCase());
        },
    });
    Object.defineProperty(user, secondKey, {
        get() {
            return protectedVal;
        },
        set(value) {
            if (value.charAt(0) === '+') {
                protectedVal = `+${value.replace(/\D/g, '')}`;
            } else {
                protectedVal = value.replace(/\D/g, '');
            }
        },
    });
    return user;
}

const user = addProtectedKey('fullName', 'phone', {});
user.fullName = 'aNna-mAria joHNs';
console.log(user.fullName);
user.phone = '+38(096)-111-22-33';
console.log(user.phone);
user.phone = '38(096)+111b22+33';
console.log(user.phone);
