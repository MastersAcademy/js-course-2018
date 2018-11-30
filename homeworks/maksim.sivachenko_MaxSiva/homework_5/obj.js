const array = ['header', 'menu', 'menu_item', 'tabs',
    'tab_item', 'menu', 'link', 'tabs', 'tab_item', 'menu',
    'menu_item', 'menu', 'menu_item'];
const result = {};

array.forEach((a) => {
    result[a] = result[a] + 1 || 1;
});
console.log(result);
