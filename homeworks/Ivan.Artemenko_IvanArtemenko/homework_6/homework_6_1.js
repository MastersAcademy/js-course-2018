const user = {};
Object.defineProperty(user, 'name', {
    enumerable: true,
    writeble: true,
    configurable: true,
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
    writeble: true,
    configurable: true,
    set: (date) => {
        let plus = '';
        if (date.charAt(0) === '+') {
            plus += '+';
        }
        this.phone = plus + date.split(/\D/)
            .join('');
    },
    get: () => this.phone,
});

user.name = 'aNNa-maRia Johns';
console.log(user.name);
user.phone = '+38(096)-448-20-89';
console.log(user.phone);
user.phone = '+38(096)w448=20+89';
console.log(user.phone);
