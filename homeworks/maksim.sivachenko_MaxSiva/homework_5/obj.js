const array = ['header', 'menu', 'menu_item', 'tabs',
    'tab_item', 'menu', 'link', 'tabs', 'tab_item', 'menu',
    'menu_item', 'menu', 'menu_item'];
const result = {};

array.forEach((name) => {
    if (Object.prototype.hasOwnProperty.call(result, name)) {
        result[name] += 1;
    } else {
        result[name] = 1;
    }

    /* result[name] = result[name] + 1 || 1; */
});
console.log(result);
