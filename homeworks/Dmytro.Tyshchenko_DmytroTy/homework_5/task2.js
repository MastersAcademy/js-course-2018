const classes = ['header', 'menu', 'menu_item', 'tabs',
    'tab_item', 'menu', 'link', 'tabs', 'tab_item', 'menu',
    'menu_item', 'menu', 'menu_item'];

function createObject(array) {
    const obj = {};
    let str;
    let count;
    array.forEach((element) => {
        if (element === str) count++;
        else {
            str = element;
            count = 1;
        }
        obj[str] = count;
    });
    return obj;
}

console.log(createObject(classes.sort()));
