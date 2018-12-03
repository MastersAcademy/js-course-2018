function countKey(array) {
    const object = {};

    for (let i = 0; i < array.length; i++) {
        if (object[array[i]] == null) {
            object[array[i]] = 1;
        } else {
            object[array[i]] += 1;
        }
    }

    return object;
}

const classes = ['header', 'menu', 'menu_item', 'tabs',
    'tab_item', 'menu', 'link', 'tabs', 'tab_item', 'menu',
    'menu_item', 'menu', 'menu_item'];

console.log(countKey(classes));
