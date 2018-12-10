const user = {};
function createUser() {
    let fullName;
    let phone;
    const capitalLetter = /\b\w/g;
    const removeCharacters = /[^\d]/g;
    Object.defineProperty(user, 'fullName', {
        get() {
            return fullName;
        },
        set(editedName) {
            fullName = editedName
                .toLowerCase()
                .replace(capitalLetter, l => l.toUpperCase());
        },
    });
    Object.defineProperty(user, 'phone', {
        get() {
            return phone;
        },
        set(editedPhone) {
            if (editedPhone[0] === '+') {
                phone = `+${editedPhone.replace(removeCharacters, '')}`;
            } else {
                phone = editedPhone.replace(removeCharacters, '');
            }
        },
    });
}
createUser(user);
user.fullName = 'aNna-mAria joHNs';
console.log(user.fullName);
user.phone = '+38(096)-111-22-33';
console.log(user.phone);
user.phone = '38(096)+111b22+33';
console.log(user.phone);
