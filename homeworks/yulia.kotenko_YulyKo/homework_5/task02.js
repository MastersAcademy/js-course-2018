const classes = ['header', 'menu', 'menu_item', 'tabs',
    'tab_item', 'menu', 'link', 'tabs', 'tab_item', 'menu',
    'menu_item', 'menu', 'menu_item'];

function sortClasses(array) {
    const myObject = {};
    array.forEach((element) => {
        if (element in myObject) {
            myObject[element]++;
        } else {
            myObject[element] = 1;
        }
    });

    return myObject;
}

console.log(sortClasses(classes));
