/**
 * Создать объект user со следующими свойствами: fullName, phone.
 * Свойство fullName должно при присвоении туда значения капитализировать
 * каждое слово плюс остальные буквы слова делать маленькими, свойство phone
 * должно при присвоении туда значения оставлять только цифры 0..9 и ведущий знак плюс.
 * Пример:
 *
 * user.fullName = 'aNna-mAria joHNs';
 * console.log(user.fullName); // => 'Anna-Maria Johns'
 * user.phone = '+38(096)-111-22-33';
 * console.log(user.phone); // => '+380961112233';
 * user.phone = '38(096)+111b22+33';
 * console.log(user.phone); // => '380961112233';
 */

function User() {
    let fullName;
    let phone;
    Object.defineProperties(this, {
        fullName: {
            set(value) {
                fullName = value.toLowerCase().replace(/\b\w/g, capitalize => capitalize.toUpperCase());
            },
            get() {
                return fullName;
            },
        },
        phone: {
            set(value) {
                const phoneNumber = value.replace(/\D+/g, '');
                phone = (value[0] === '+') ? '+'.concat(phoneNumber) : phoneNumber;
            },
            get() {
                return phone;
            },
        },
    });
}

const user = new User();

console.log();
user.fullName = 'aNna-mAria joHNs';
console.log(user.fullName);
user.phone = '+38(096)+111b22-33';
console.log(user.phone);
user.phone = '38(096)111$22vs33';
console.log(user.phone);
