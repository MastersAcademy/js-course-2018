const user = {};

Object.defineProperties(user, {
    fullName: {
        get: () => this.fullName,
        set: (value) => {
            this.fullName = value.split('').reduce((accumulator, element, index, array) => (
                index === 0 || array[index - 1] === ' ' || array[index - 1] === '-'
                    ? accumulator + element.toUpperCase()
                    : accumulator + element.toLowerCase()
            ), '');
        },
    },
    phone: {
        get: () => this.phone,
        set: (value) => {
            this.phone = value.split('').reduce((accumulator, element, index) => (
                (index === 0 && element === '+') || !Number.isNaN(parseInt(element, 10))
                    ? accumulator + element
                    : accumulator
            ), '');
        },
    },
});

user.fullName = 'anna-mAria joHNs';
console.log(user.fullName);
user.phone = '+38(096)-111-22-33 ';
console.log(user.phone);
