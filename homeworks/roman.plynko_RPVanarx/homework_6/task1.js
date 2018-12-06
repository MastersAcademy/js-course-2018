function addProtectedFields(keyName, keyPhone, obj) {
    let protectedName;
    let protectedPhone;
    Object.defineProperty(obj, keyName, {
        get() {
            return protectedName;
        },
        set(value) {
            protectedName = value.toLowerCase()
                .split(/\s+/)
                .map(word => word[0].toUpperCase() + word.substring(1))
                .join(' ')
                .split(/-/)
                .map(word => word[0].toUpperCase() + word.substring(1))
                .join('-');
        },
        enumerable: true,
    });

    Object.defineProperty(obj, keyPhone, {
        get() {
            return protectedPhone;
        },
        set(value) {
            let plus = '';
            if (value.charAt(0) === '+') { plus += '+'; }
            protectedPhone = plus + value.split(/\D/).join('');
        },
        enumerable: true,
    });
    return obj;
}

const user = addProtectedFields('name', 'phone', {});

user.name = 'aNna-mAria joHNs';
console.log(user.name);

user.phone = '+38(096)-111-22-33';
console.log(user.phone);

user.phone = '38(096)+111b22+33';
console.log(user.phone);
