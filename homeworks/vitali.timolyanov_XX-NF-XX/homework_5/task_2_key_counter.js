function countElements(arr) {
    const result = {};
    arr.forEach((key) => {
        result[key] = (key in result) ? result[key] + 1 : 1;
    });
    return result;
}

const classes = ['header', 'menu', 'menu_item', 'tabs', 'tab_item', 'menu',
    'link', 'tabs', 'tab_item', 'menu', 'menu_item', 'menu', 'menu_item'];

console.log(countElements(classes));
