const classes = ['header', 'menu', 'menu_item', 'tabs',
    'tab_item', 'menu', 'link', 'tabs', 'tab_item', 'menu',
    'menu_item', 'menu', 'menu_item'];

function reObjArr(arr) {
    const a = {};
    arr.forEach((key) => {
        if (key in a) {
            a[key] += 1;
        } else {
            a[key] = 1;
        }
    });
    return a;
}

console.log(reObjArr(classes));
