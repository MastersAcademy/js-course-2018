// Task 6.1 Creating an object with protected values

function createProtectedAccount(fieldFullName, fieldPhone, accountBlank) {
    let serviceFullName;
    let servicePhone;

    Object.defineProperty(accountBlank, fieldFullName, {
        get() {
            return serviceFullName;
        },
        set(value) {
            serviceFullName = value.toString().toLowerCase().replace(/\b\w/g, match => match.toUpperCase());
        },
        enumerable: true,
    });

    Object.defineProperty(accountBlank, fieldPhone, {
        get() {
            return servicePhone;
        },
        set(value) {
            servicePhone = '+'.concat(value.toString().replace(/\D/g, ''));
        },
        enumerable: true,
    });

    return accountBlank;
}

const user = createProtectedAccount('fullName', 'phone', {});

console.log(user);
console.log(user.fullName);
console.log(user.phone);

user.fullName = 'aNna-mAria joHNs';
user.phone = '38(096)+111b22-33';

console.log(user);
console.log(user.fullName);
console.log(user.phone);

delete user.phone;

console.log(Object.prototype.hasOwnProperty.call(user, 'phone'));
