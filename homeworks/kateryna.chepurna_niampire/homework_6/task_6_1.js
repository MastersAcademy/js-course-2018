
function userInfo(obj) {
    let phone;
    let fullName;
    Object.defineProperty(obj, 'fullName', {
        get() {
            return fullName;
        },
        set(name) {
            fullName = name.trim().toLowerCase().replace(/\b\w/g, letter => letter.toUpperCase());
        },
    });
    Object.defineProperty(obj, 'phone', {
        get() {
            return phone;
        },
        set(phoneNumber) {
            phone = phoneNumber.trim().replace(/(?!^\+)\D+/g, '');
        },
    });
    return obj;
}
const user = userInfo({});

user.fullName = '  aNna-mAria teReza joHNs';
console.log(user.fullName); // => 'Anna-Maria Johns'
user.phone = '+38(096)-111-22-33';
console.log(user.phone); // => '+380961112233';
user.phone = '38(096)+11   -/1b22+33';
console.log(user.phone); // => '380961112233';
