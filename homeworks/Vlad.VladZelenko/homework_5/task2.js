const arr = [
    'header', 'menu', 'menu_item', 'tabs',
    'tab_item', 'menu', 'link', 'tabs', 'tab_item',
    'menu', 'menu_item', 'menu', 'menu_item',
];

function findRepay(array) {
    const newObject = {};
    // eslint-disable-next-line array-callback-return
    array.map((key) => {
        if (key in newObject) {
            newObject[key] += 1;
        } else {
            newObject[key] = 1;
        }
    });
    return newObject;
}
console.log(findRepay(arr));
