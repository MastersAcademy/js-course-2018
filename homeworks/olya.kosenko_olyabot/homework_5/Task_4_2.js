const classes = ['header', 'menu', 'menu_item', 'tabs',
    'tab_item', 'menu', 'link', 'tabs', 'tab_item', 'menu',
    'menu_item', 'menu', 'menu_item'];

function calcObjKey() {
    const obj = {};
    classes.forEach((key) => {
        if (key in obj) {
            obj[key]++;
        } else {
            obj[key] = 1;
        }
    });
    console.log(obj);
    return Object.keys(obj);
}
calcObjKey();
