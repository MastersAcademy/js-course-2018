const classes = ['header', 'menu', 'menu_item', 'tabs',
    'tab_item', 'menu', 'link', 'tabs', 'tab_item', 'menu',
    'menu_item', 'menu', 'menu_item'];

function propertyCounter(arr) {
    const result = {};

    arr.sort().forEach((element) => {
        if (result[element]) {
            result[element] += 1;
        } else {
            result[element] = 1;
        }
    });

    return result;
}

console.log(propertyCounter(classes));
