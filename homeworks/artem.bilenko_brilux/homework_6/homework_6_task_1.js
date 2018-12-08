function User() {
    let fullName;
    let phone;

    Object.defineProperty(this, 'fullName', {
        get() {
            return fullName;
        },
        set(editedName) {
            fullName = editedName
                .toLowerCase()
                .replace(/\b\w/g, l => l.toUpperCase());
        },
    });
    Object.defineProperty(this, 'phone', {
        get() {
            return phone;
        },
        set(editedPhone) {
            const newPhone = editedPhone.replace(/[^+\d]/g, '');
            if (newPhone[0] === '+') {
                newPhone.replace(/[^\d]/g, '');
                newPhone[0] = '+';
                phone = newPhone;
            } else {
                phone = newPhone.replace(/[^\d]/g, '');
            }
        },
    });
}

const user = new User();
user.fullName = 'aNna-mAria joHNs';
console.log(user.fullName);
user.phone = '+38(096)-111-22-33';
console.log(user.phone);
user.phone = '38(096)+111b22+33';
console.log(user.phone);
