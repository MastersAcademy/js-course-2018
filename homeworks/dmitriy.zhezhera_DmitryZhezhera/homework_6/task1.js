const user = {};

function addFullName(keyName, obj) {
    let protectedVal;
    Object.defineProperty(obj, keyName, {
        get() {
            return protectedVal;
        },
        set(value) {
            const name = value.split('');
            const result = [];
            result.push(name[0].toUpperCase());
            for (let i = 1; i < name.length; i++) {
                if (/\W/.test(name[i - 1])) {
                    result.push(name[i].toUpperCase());
                } else result.push(name[i].toLowerCase());
            }
            protectedVal = result.join('');
        },
        enumerable: true,
    });
    return obj;
}

function addPhone(keyName, obj) {
    let protectedVal;
    Object.defineProperty(obj, keyName, {
        get() {
            return protectedVal;
        },
        set(value) {
            protectedVal = value.match(/^\+|\d/g).join('');
        },
        enumerable: true,
    });
    return obj;
}
// ===
addFullName('fullName', user);
addPhone('phone', user);
// ===
console.log('===TEST1=== Anna-Maria Johns');
user.fullName = 'aNna-mAria joHNs';
console.log(user.fullName); // => 'Anna-Maria Johns'

console.log('===TEST2=== +380961112233');
user.phone = '+38(096)-111-22-33';
console.log(user.phone); // => '+380961112233';

console.log('===TEST3=== 380961112233');
user.phone = '38(096)+111b22+33';
console.log(user.phone); // => '380961112233';
