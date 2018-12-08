const classes = ['header', 'menu', 'menu_item', 'tabs',
    'tab_item', 'menu', 'link', 'tabs', 'tab_item', 'menu',
    'menu_item', 'menu', 'menu_item'];

const newObject = classes.reduce((rez, el) => {
    const rezult = {};
    if (Object.prototype.hasOwnProperty.call(rez, el)) {
        rezult[el] += 1;
    } else {
        rezult[el] = 1;
    }
    return rezult;
}, {});

console.log(newObject);
