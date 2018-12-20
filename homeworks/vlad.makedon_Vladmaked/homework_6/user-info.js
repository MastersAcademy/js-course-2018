function setUserInfo(keyFullName, keyPhone, object) {
    let fullName;
    let phone;
    Object.defineProperty(object, keyFullName, {
        get() {
            return fullName;
        },
        set(value) {
            fullName = value.toLowerCase().replace(/\b\w/g, v => v.toUpperCase());
        },
    });
    Object.defineProperty(object, keyPhone, {
        get() {
            return phone;
        },
        set(value) {
            phone = (value[0] === '+') ? phone = value.replace(/[^+\d]/g, '') : phone = value.replace(/[^\d]/g, '');
        },
    });
    return object;
}
const user = setUserInfo('fullName', 'phone', {});

user.fullName = 'anna-mAria joHNs';
console.log(user.fullName);
user.phone = '+38(096)-111-22-33 ';
console.log(user.phone);
user.phone = '38(096)+111b22+33';
console.log(user.phone);
