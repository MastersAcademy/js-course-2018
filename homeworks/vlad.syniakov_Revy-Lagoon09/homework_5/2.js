const classes = ['header', 'menu', 'menu_item', 'tabs', 'tab_item', 'menu',
    'link', 'tabs', 'tab_item', 'menu', 'menu_item', 'menu', 'menu_item'];
function counter(arr) {
    const countItems = {};
    arr.forEach((key) => {
        countItems[key] = (key in countItems) ? countItems[key] + 1 : 1;
    });
    return countItems;
}
console.log(counter(classes));
