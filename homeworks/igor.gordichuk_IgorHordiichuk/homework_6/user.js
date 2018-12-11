const user = {};

function addUser(userName, userPhone, objUser) {
    let keyName;
    let keyPhone;
    Object.defineProperty(objUser, userName, {
        set(name) {
            keyName = name.toLowerCase().replace(/\b\w/g, capitalLetter => capitalLetter.toUpperCase());
        },
        get() {
            return keyName;
        },
    });

    Object.defineProperty(objUser, userPhone, {
        set(phoneNum) {
            keyPhone = `+${phoneNum.replace(/\D+/g, '')}`;
        },
        get() {
            return keyPhone;
        },
    });
    return objUser;
}

addUser('fullName', 'phone', user);
user.fullName = 'aNna-mAria joHNs';
console.log(`User name: ${user.fullName}`);

user.phone = '+38(096)-111-22-33';
console.log(`User phone: ${user.phone}`);

user.phone = '38((((09  6p)+11_122+33';
console.log(`User phone: ${user.phone}`);
