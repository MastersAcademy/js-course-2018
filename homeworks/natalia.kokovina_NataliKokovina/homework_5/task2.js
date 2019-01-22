
const classes = ['header', 'menu', 'menu_item', 'tabs',
    'tab_item', 'menu', 'link', 'tabs', 'tab_item', 'menu', 'menu_item', 'menu', 'menu_item'];

function toObject(arr) {
    return arr.reduce((obj, propertyName) => {
        const newObj = obj;
        if (propertyName in obj) {
            newObj[propertyName]++;
        } else newObj[propertyName] = 1;
        return obj;
    }, {});
}
console.log(toObject(classes));
