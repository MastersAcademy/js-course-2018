const classes = ['header', 'menu', 'menu_item', 'tabs',
    'tab_item', 'menu', 'link', 'tabs', 'tab_item', 'menu',
    'menu_item', 'menu', 'menu_item'];

function keys(array) {
    const result = {};
    array.forEach((key) => {
        if (key in result) {
            result[key] += 1;
        } else {
            result[key] = 1;
        }
    });
    return result;
}

console.log(keys(classes));
