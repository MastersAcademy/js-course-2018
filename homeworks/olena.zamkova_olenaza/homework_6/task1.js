const FIRST_CHAR_REG = new RegExp(/\b\w/g);
const STARTING_PLUS_REG = new RegExp(/^[+]?/);
const NUMBER_REG = new RegExp(/\d+/g);

function User() {
    let fullName;
    let phone;

    Object.defineProperty(this, 'fullName', {
        get() {
            return fullName;
        },
        set(name) {
            fullName = name.toLowerCase().replace(FIRST_CHAR_REG, ch => ch.toUpperCase());
        },
        configurable: true,
        enumerable: true,
    });

    Object.defineProperty(this, 'phone', {
        get() {
            return phone;
        },
        set(phoneNumber) {
            phone = STARTING_PLUS_REG.exec(phoneNumber) + phoneNumber.match(NUMBER_REG).join('');
        },
        configurable: true,
        enumerable: true,
    });
}

// output results

const user = new User();

user.fullName = 'aNna-mAria joHNs';
console.log(user.fullName);
user.phone = '+38(096)-111-22-33';
console.log(user.phone);
user.phone = '38(096)+111b22+33';
console.log(user.phone);
