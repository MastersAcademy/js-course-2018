const arr = ['header', 'menu', 'menu_item', 'tabs',
    'tab_item', 'menu', 'link', 'tabs', 'tab_item', 'menu',
    'menu_item', 'menu', 'menu_item'];
const result = {};
arr.forEach((a) => {
    result[a] = result[a] + 1 || 1;
});
for (const key in result) {
    if ({}.hasOwnProperty.call(result, key)) {
        console.log(key + result[key]);
    }
}
