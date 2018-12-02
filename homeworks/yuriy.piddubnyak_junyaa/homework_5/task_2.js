const array = ['header', 'menu', 'menu_item', 'tabs',
    'tab_item', 'menu', 'link', 'tabs', 'tab_item', 'menu',
    'menu_item', 'menu', 'menu_item'];
function objCreator(arr) {
    const result = {};
    arr.forEach((a) => {
        result[a] = result[a] + 1 || 1;
    });

    return result;
}

console.log(objCreator(array));
