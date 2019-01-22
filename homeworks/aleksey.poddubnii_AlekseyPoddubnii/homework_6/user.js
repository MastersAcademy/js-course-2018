
const user = {};

function createName(obj, key) {
    let correctName;
    Object.defineProperty(obj, key, {
        set(input) {
            correctName = input.toLowerCase().trim().replace(/\b\w/g, name => name.toUpperCase());
        },
        get() {
            return correctName;
        },
    });
}

function createPhone(obj, key) {
    let correctPhone;
    Object.defineProperty(obj, key, {
        enumerable: true,
        set(input) {
            correctPhone = input.match(/^\+|\d/g).join('');
        },
        get() {
            return correctPhone;
        },
    });
}

createName(user, 'name');
createPhone(user, 'phone');

user.name = 'aNna-mAria joHNs';
console.log(user.name);

user.name = 'SOMe fOR Test it';
console.log(user.name);

user.phone = '+38(096)-111-22-33';
console.log(user.phone);

user.phone = '38(096)+111b22+33';
console.log(user.phone);
