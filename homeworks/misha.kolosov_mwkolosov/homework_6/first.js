const user = {};
let fullName = '';

Object.defineProperty(user, 'fullName', {
    get: () => fullName,
    set: (value) => {
        const chars = value.toLowerCase().split(/[- ]/g).map(txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()).join(' ');
        fullName = chars;
        const char = value.match(chars);
        while (char) {
            this.letstr = chars.substr(0, char.index) + char[0] + chars.substr(char.index + 1);
            this.value = `${value.substr(0, char.index)}*${value.substr(char.index + 1)}`;
        }
    },
});

let phone = '';
Object.defineProperty(user, 'phone', {
    get: () => phone,
    set: (value) => {
        const chars = /[/(/)/+-]|[a-zA-Zа-яА-Я]/g;
        phone = `+${value.replace(chars, '')}`;
    },
});

user.fullName = 'aNna-mAria joHNs';
console.log(user.fullName); // => 'Anna-Maria Johns'
user.phone = '+38(096)-111-22-33';
console.log(user.phone); // => '+380961112233';
user.phone = '38(096)+111b22+33';
console.log(user.phone); // => '380961112233';
