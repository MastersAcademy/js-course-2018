
const classes = ['header', 'menu', 'menu_item', 'tabs',
    'tab_item', 'menu', 'link', 'tabs', 'tab_item', 'menu', 'menu_item', 'menu', 'menu_item'];

function toObject(arr) {
    const obj = {};
    arr.forEach((propertyName) => {
        if (propertyName in obj) {
            obj[propertyName]++;
            return obj;
        }
        obj[propertyName] = 1;

        return obj;
    });
    console.log(obj);
}
toObject(classes);
