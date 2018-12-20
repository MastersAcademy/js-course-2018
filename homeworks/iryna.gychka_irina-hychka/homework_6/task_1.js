function assignUserName(objKey, obj) {
    let fullNameValue;
    Object.defineProperty(obj, objKey, {
        get() {
            return fullNameValue;
        },
        set(value) {
            fullNameValue = value.replace(/\w\S*/g, val => (
                val.split('-').map(item => (
                    item.charAt(0).toUpperCase() + item.substr(1).toLowerCase()
                )).join('-')
            ));
        },
        enumerable: true,
    });
    return obj;
}

function assignUserPhone(objKey, obj) {
    let phoneValue;
    Object.defineProperty(obj, objKey, {
        get() {
            return phoneValue;
        },
        set(value) {
            phoneValue = value.replace(/[^0-9]/g, '');
            if (value[0] === '+') {
                phoneValue = `+${phoneValue}`;
            }
        },
        enumerable: true,
    });
    return obj;
}

let user = {};
user = assignUserName('fullName', user);
user = assignUserPhone('phone', user);
user.fullName = 'aNna-mAria joHNs';
user.phone = '+38(096)+111b22+33';

// Output
console.log(user.fullName);
console.log(user.phone);
