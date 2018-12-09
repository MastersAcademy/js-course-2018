function addUser() {
    let fullName;
    let phone;
    const obj = {};
    Object.defineProperty(obj, 'fullName', {
        get() {
            return fullName;
        },
        set(value) {
            fullName = value.toLowerCase().replace(/\b\w/g, firstLetter => firstLetter.toUpperCase());
        },
    });
    Object.defineProperty(obj, 'phone', {
        get() {
            return phone;
        },
        set(value) {
            phone = value.toLowerCase().replace(/(^\+)|\D*(\d+)\D*/g, (str, plus, num) => (plus) || num);
        },
    });
    return obj;
}

const obj = addUser();
obj.fullName = 'aNna-mAria joHNs';
obj.phone = '++ddf38(096)+111b22+33';
console.log(obj.fullName);
console.log(obj.phone);
console.log(obj);
