const users = {};
const phone = {};
function userObjects(user) {
    let fullName;
    let phoneNumber;
    Object.defineProperties(users, {
        fullName: {
            set(name) {
                fullName = name.toString().toLowerCase().replace(/\b\w/g, value => value.toUpperCase());
            },
            get() {
                return fullName;
            },
        },
    });
    Object.defineProperties(phone, {
        phoneNumber: {
            set(numPhone) {
                phoneNumber = '+'.concat(numPhone.toString().replace(/\D/g, ''));
            },
            get() {
                return phoneNumber;
            },
        },
    });
    return user;
}
const user = userObjects({});
user.fullName = 'aNna-mAria joHNs';
console.log(user.fullName);
user.phone = '+38(096)-111-22-33';
console.log(user.phone);
user.phone = '38(096)-111-22-33';
console.log(user.phone);
