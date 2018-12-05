const classes = ['header', 'menu', 'menu_item', 'tabs', 'tab_item', 'menu', 'link', 'tabs', 'tab_item', 'menu', 'menu_item', 'menu', 'menu_item'];
const objWithKeys = {};

function showObj(inputObj) {
    inputObj.forEach((key) => {
        if (key in objWithKeys) {
            objWithKeys[key] += 1;
        } else {
            objWithKeys[key] = 1;
        }
    });
    console.log(objWithKeys);
}

showObj(classes);
