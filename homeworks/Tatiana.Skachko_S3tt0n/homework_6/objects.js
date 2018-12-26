const user = {};

function firstCharCapitalizer(name) {
    return name[0].toUpperCase() + name.substring(1);
}

Object.defineProperty(user, 'fullName', {
    configurable: true,
    enumerable: true,
    get() {
        return this.capitName;
    },
    set(value) {
        this.capitName = value.toLowerCase();
        this.capitName = this.capitName.split(' ').map(firstCharCapitalizer).join(' ');
        this.capitName = this.capitName.split('-').map(firstCharCapitalizer).join('-');
    },
});

Object.defineProperty(user, 'phone', {
    configurable: true,
    enumerable: true,
    get() {
        return this.filteredNumber;
    },
    set(value) {
        this.filteredNumber = value.match(/^\+|\d/g).join('');
    },
});
user.fullName = 'aNna-mAria joHNs';
console.log(user.fullName);
user.phone = '+38(096)-111-22-33';
console.log(user.phone);
user.phone = '38(096)+111b22+33';
console.log(user.phone);
