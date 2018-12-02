function title(arr) {
    const result = {};
    arr.forEach((value) => {
        result[value] = (value in result) ? result[value] + 1 : 1;
    });
    return result;
}
const massName = ['header', 'menu', 'menu_item', 'tabs', 'tab_item', 'menu',
    'link', 'tabs', 'tab_item', 'menu', 'menu_item', 'menu', 'menu_item'];
console.log(title(massName));
