const user = {};
Object.defineProperties(user, {
    fullName: {
        enumerable: true,
        configurable: true,
        writeble: true,
        set: (value) => {
            this.fullName = value.replace(/([[A-Za-z])\S/g, s => s.toLowerCase()).replace(/(^|\s|[-])\S/g, s => s.toUpperCase());
        },
        get: () => this.fullName,
    },
    phone: {
        enumerable: true,
        configurable: true,
        writeble: true,
        set: (value) => {
            let plus = '';
            if (value.charAt(0) === '+') {
                plus += '+';
            }
            this.phone = plus + value.split(/\D/).join('');
        },
        get: () => this.phone,
    },
});
user.fullName = 'aNna-mAria joHNs';
console.log(user.fullName);
user.phone = '‎‎+38(067)111-22-33';
console.log(user.phone);
user.phone = '38(096)+111b22+33';
console.log(user.phone);
