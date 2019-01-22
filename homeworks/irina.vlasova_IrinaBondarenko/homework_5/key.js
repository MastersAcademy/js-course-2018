function baz(arr) {
    const obj = {};
    arr.forEach((key) => {
        if (key in obj) {
            obj[key] += 1;
        } else {
            obj[key] = 1;
        }
    });
    return obj;
}
const classes = ['header', 'menu', 'menu_item', 'tabs', 'tab_item', 'menu',
    'link', 'tabs', 'tab_item', 'menu', 'menu_item', 'menu', 'menu_item'];
console.log(baz(classes));
