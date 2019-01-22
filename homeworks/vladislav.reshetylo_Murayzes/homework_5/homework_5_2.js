// task 2
const classes = ['header', 'menu', 'menu_item', 'tabs', 'tab_item', 'menu',
    'link', 'tabs', 'tab_item', 'menu', 'menu_item', 'menu', 'menu_item'];

function createObj(array) {
    const object = {};
    array.forEach((element) => {
        if (element in object) {
            object[element] += 1;
        } else {
            object[element] = 1;
        }
    });
    return object;
}
console.log(createObj(classes));
