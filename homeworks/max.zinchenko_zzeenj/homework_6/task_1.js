const user = {};
Object.defineProperty(user, 'phone', {
    set: (str) => {
        let plusChar = '';
        if (str.charAt(0) === '+') { plusChar += '+'; }
        this.phone = plusChar + str.split(/\D/).join('');
    },
    get: () => this.phone,
});
Object.defineProperty(user, 'fullName', {
    set: (str) => {
        this.fullName = str.toLowerCase()
            .split(/\s+/)
            .map(name => name[0].toUpperCase() + name.substring(1)).join(' ')
            .split(/-/)
            .map(name => name[0].toUpperCase() + name.substring(1))
            .join('-');
    },
    get: () => this.fullName,
});
user.fullName = 'aNna-mAria joHNs';
console.log(user.fullName);
user.phone = '+38(096)-111-22-33';
console.log(user.phone);
user.phone = '38(096)+111b22+33';
console.log(user.phone);
