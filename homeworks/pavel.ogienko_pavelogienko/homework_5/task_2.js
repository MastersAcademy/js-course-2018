const classes = ['header', 'menu', 'menu_item', 'tabs',
    'tab_item', 'menu', 'link', 'tabs', 'tab_item', 'menu',
    'menu_item', 'menu', 'menu_item'];

const countElements = (array) => {
    const result = {};
    array.forEach((item) => {
        if (!result[item]) {
            result[item] = 1;
        }
        ++result[item];
    });
    return result;
};

console.log(countElements(classes));
