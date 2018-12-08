const user = {};
 Object.defineProperties(user, {
    fullName: {
        set: (name) => {
            this.fullName = name.replace(/([[A-Za-z])\S/g, s => s.toLowerCase()).replace(/(^|\s|[-])\S/g, s => s.toUpperCase());
        },
        get: () => this.fullName,
        enumerable: true,
        configurable: true,
    },
    phone: {
        set: (phoneNum) => {
            this.phone = phoneNum.replace(/(?!^\+)\D+/g, '');
        },
        get: () => this.phone,
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
 