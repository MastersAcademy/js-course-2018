const classes = ['header', 'menu', 'menu_item', 'tabs',
    'tab_item', 'menu', 'link', 'tabs', 'tab_item', 'menu',
    'menu_item', 'menu', 'menu_item'];

function copyInObject(arr) {
    const classesObject = {};
    arr.forEach((element) => {
        if (element in classesObject) {
            classesObject[element] += 1;
        } else classesObject[element] = 1;
    });
    return classesObject;
}

console.log(copyInObject(classes));
