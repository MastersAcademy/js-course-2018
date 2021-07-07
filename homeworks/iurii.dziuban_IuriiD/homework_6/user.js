/**
 * https://github.com/MastersAcademy/js-course-2018/issues/764
 * Создать объект user со следующими свойствами: fullName, phone.
 * Свойство fullName должно при присвоении туда значения капитализировать
 * каждое слово плюс остальные буквы слова делать маленькими, свойство phone
 * должно при присвоении туда значения оставлять только цифры 0..9 и ведущий
 * знак плюс. Пример:
 * user.fullName = 'aNna-mAria joHNs';
 * console.log(user.fullName); // => 'Anna-Maria Johns'
 * user.phone = '+38(096)-111-22-33';
 * console.log(user.phone); // => '+380961112233';
 * user.phone = '38(096)+111b22+33';
 * console.log(user.phone); // => '380961112233';
 */
const user = {};

Object.defineProperty(user, 'fullName', {
    fullName: '',
    get: () => this.fullName,
    set: (input) => {
        const regX = /(?<=-)./gm;
        this.fullName = input
            .toLowerCase()
            .split(' ')
            .map(word => word[0].toUpperCase() + word.slice(1))
            .join(' ')
            .replace(regX, letter => letter.toUpperCase());
    },
});

Object.defineProperty(user, 'phone', {
    phone: '',
    get: () => this.phone,
    set: (input) => {
        const regX = /\D+/gm;
        this.phone = `+${input.replace(regX, '')}`;
    },
});

user.fullName = 'aNna-mAria joHNs';
console.log(user.fullName); // => 'Anna-Maria Johns'
user.phone = '+38(096)-111-22-33';
console.log(user.phone); // => '+380961112233';
user.phone = '38(096)+111b22+33';
console.log(user.phone); // => '380961112233';
