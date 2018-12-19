// Task_2

const classes = ['header', 'menu', 'menu_item', 'tabs',
    'tab_item', 'menu', 'link', 'tabs', 'tab_item', 'menu',
    'menu_item', 'menu', 'menu_item'];

function getNumberOfRepetitionsKeys(array) {
    const value = {};
    array.forEach((key) => {
        value[key] = (key in value) ? (value[key] += 1) : (value[key] = 1);
    });
    return value;
}
console.log(getNumberOfRepetitionsKeys(classes));
