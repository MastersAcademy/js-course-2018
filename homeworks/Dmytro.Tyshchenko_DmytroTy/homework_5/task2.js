const classes = ['header', 'menu', 'menu_item', 'tabs',
    'tab_item', 'menu', 'link', 'tabs', 'tab_item', 'menu',
    'menu_item', 'menu', 'menu_item'];

function createObject(array) {
    return array.reduce((obj, elem) => {
        const objNew = obj;
        objNew[elem] = elem in obj ? obj[elem] + 1 : 1;
        return obj;
    }, {});
}

console.log(createObject(classes.sort()));
