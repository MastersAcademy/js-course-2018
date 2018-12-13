const user = {};
Object.defineProperty(user, 'name', {
    enumerable: true,
    writeble: true,
    configurable: true,
    set: (value) => {
        const capititalizeWord = word => word[0].toUpperCase() + word.substring(1);
        this.name = value.toLowerCase()
            .split(/\s+/)
            .map(capititalizeWord)
            .join(' ')
            .split(/-/)
            .map(capititalizeWord)
            .join('-');
    },
    get: () => this.name,
});

Object.defineProperty(user, 'phone', {
    enumerable: true,
    writeble: true,
    configurable: true,
    set: (value) => {
        const plus = value[0] === '+' ? '+' : '';
        this.phone = plus + value.split(/\D/).join('');
    },
    get: () => this.phone,
});

user.name = 'aNNa-maRia Johns';
console.log(user.name);
user.phone = '+38(096)-448-20-89';
console.log(user.phone);
user.phone = '+38(096)w448=20+89';
console.log(user.phone);
