const classes = ['header', 'menu', 'menu_item', 'tabs',
    'tab_item', 'menu', 'link', 'tabs', 'tab_item', 'menu',
    'menu_item', 'menu', 'menu_item'];

function obj(input) {
    const newobject = {};
    input.forEach((item) => {
        if (item in newobject) {
            newobject[item] += 1;
        } else {
            newobject[item] = 1;
        }
    });
    return newobject;
}

console.log(obj(classes));
