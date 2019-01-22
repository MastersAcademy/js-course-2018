const object = {
    menu: { logo: 'Dreams', item: 'About' },
    content: 'article',
};
function cloneObject(obj) {
    const objectCopy = {};
    Object.keys(obj).forEach((i) => {
        if (obj[i] !== null && typeof (obj[i]) === 'object') {
            objectCopy[i] = cloneObject(obj[i]);
        } else {
            objectCopy[i] = obj[i];
        }
    });
    return objectCopy;
}

console.log(cloneObject(object));
