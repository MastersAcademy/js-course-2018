const classes = ['header', 'menu', 'menu_item', 'tabs',
    'tab_item', 'menu', 'link', 'tabs', 'tab_item', 'menu',
    'menu_item', 'menu', 'menu_item'];

function returnObject(arr) {
    const result = {};
    arr.forEach((i) => {
        if (i in result) {
            result[i] += 1;
        } else {
            result[i] = 1;
        }
    });
    return result;
}

console.log(returnObject(classes));
