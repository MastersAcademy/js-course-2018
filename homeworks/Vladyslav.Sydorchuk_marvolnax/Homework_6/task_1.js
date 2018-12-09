const user = {};
 Object.defineProperty(user, 'name', {
    enumerable: true,
    configurable: true,
    writeble: true, 
    set: (date) => {
        this.name = date.toLowerCase()
            .split(/\s+/)
            .map(word => word[0].toUpperCase() + word.substring(1))
            .join(' ')
            .split(/-/)
            .map(word => word[0].toUpperCase() + word.substring(1))
            .join('-');
    },
    get: () => this.name,
});
 Object.defineProperty(user, 'phone', {
    enumerable: true,
    configurable: true,
    writeble: true,
    set: (date) => {
        let plus = '';
        if (date.charAt(0) === '+') { plus += '+'; }
        this.phone = plus + date.split(/\D/).join('');
    },
    get: () => this.phone,
});
 user.name = 'aNna-mAria joHNs';
console.log(user.name);
 user.phone = '+38(096)-111-22-33';
console.log(user.phone);
 user.phone = '38(096)+111b22+33';
console.log(user.phone);