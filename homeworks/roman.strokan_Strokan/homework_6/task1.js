const user = {};

Object.defineProperties(user, {
    fullName: {
        set(value) {
            this.editedFullName = value.toLowerCase();
            this.editedFullName = this.editedFullName.split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
            this.editedFullName = this.editedFullName.split('-').map(word => word[0].toUpperCase() + word.substring(1)).join('-');
        },
        get() {
            return this.editedFullName;
        },
        enumerable: true,
        configurable: true,
    },
    phone: {
        set(value) {
            this.editedPhoneValue = value.replace(/[^+\d]/g, '');
            if (value[0] !== '+') this.editedPhoneValue = this.editedPhoneValue.replace(/[^\d]/g, '');
            else {
                this.editedPhoneValue = '+'.concat(this.editedPhoneValue.replace(/[^\d]/g, ''));
            }
        },
        get() {
            return this.editedPhoneValue;
        },
        enumerable: true,
        configurable: true,
    },
});

user.fullName = 'aNna-mAria joHNs';
console.log(user.fullName);

user.phone = '+38(096)-111-22-33';
console.log(user.phone);

user.phone = '38(096)+111b22+33';
console.log(user.phone);
