const user = {};

Object.defineProperty(user, 'fullName', {
    get: () => this.fullName,

    set: (value) => {
        let clearName = value.trim().toLowerCase().split(/\s+/);
        for (let i = 0; i < clearName.length; i++) {
            clearName[i] = clearName[i].charAt(0).toUpperCase() + clearName[i].slice(1);
        }
        clearName = clearName.join(' ').split(/-/);
        for (let i = 0; i < clearName.length; i++) {
            clearName[i] = clearName[i].charAt(0).toUpperCase() + clearName[i].slice(1);
        }
        this.fullName = clearName.join('-');
    },
});

Object.defineProperty(user, 'phone', {
    get: () => this.phone,

    set: (value) => {
        let newPhoneNumber = '';
        if (value.trim()[0] === '+') { newPhoneNumber += '+'; }
        this.phone = newPhoneNumber + (value.trim().match(/\d/g)).join('');
    },
});

user.fullName = '  aLi-Ibn-haTab   kiziLbek jr.';
console.log(user.fullName);
user.fullName = 'aNna-mAria joHNs';
console.log(user.fullName);
user.phone = '        +32df113256';
console.log(user.phone);
user.phone = '+38(096)-111-22-33';
console.log(user.phone);
user.phone = '38(096)+111b22+33';
console.log(user.phone);
