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
    let secondVal;
    Object.defineProperty(user, secondKey, {
        get() {
            return secondVal;
        },
        set(secondValue) {
            secondVal = secondValue.replace(/\D/g, '');
            if (secondValue.charAt(0) === '+') {
                secondVal = `+${secondVal}`;
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
