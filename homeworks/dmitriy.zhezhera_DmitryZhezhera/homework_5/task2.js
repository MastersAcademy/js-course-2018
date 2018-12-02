const classes = ['header', 'menu', 'menu_item', 'tabs',
    'tab_item', 'menu', 'link', 'tabs', 'tab_item', 'menu',
    'menu_item', 'menu', 'menu_item'];

function toObject(arr) {
    const result = {};
    arr.forEach((item) => {
        if (!result[item]) result[item] = 1;
        else result[item]++;
    });
    return result;
}

console.log(toObject(classes));
