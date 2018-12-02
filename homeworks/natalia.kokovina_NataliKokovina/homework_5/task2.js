
const classes = ['header', 'menu', 'menu_item', 'tabs',
    'tab_item', 'menu', 'link', 'tabs', 'tab_item', 'menu', 'menu_item', 'menu', 'menu_item'];

function toObject(arr) {
    const newObj = {};
    arr.reduce((obj, propertyName) => {
        if (propertyName in newObj) {
            return newObj[propertyName]++;
        } newObj[propertyName] = 1;
        return obj;
    }, {});
    console.log(newObj);
}
toObject(classes);
