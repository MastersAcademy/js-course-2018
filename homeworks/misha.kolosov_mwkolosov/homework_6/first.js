const user = {
    _fullName: '',
    _phone: '',
};

Object.defineProperty(user, 'fullName', {
    get: () => this.editedFullName,
    set: (value) => {
        this.editedFullName = value.toLowerCase();
        this.editedFullName = this.editedFullName.split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
        this.editedFullName = this.editedFullName.split('-').map(word => word[0].toUpperCase() + word.substring(1)).join('-');
    },
});


Object.defineProperty(user, 'phone', {
    get: () => this.phone,
    set: (value) => {
        const chars = /[/(/)/+-]|[a-zA-Zа-яА-Я]/g;
        this.phone = `+${value.replace(chars, '')}`;
    },
});

user.fullName = 'aNna-mAria joHNs';
console.log(user.fullName); // => 'Anna-Maria Johns'
user.phone = '+38(096)-111-22-33';
console.log(user.phone); // => '+380961112233';
user.phone = '38(096)+111b22+33';
console.log(user.phone); // => '380961112233';
