const classes = ['header', 'menu', 'menu_item', 'tabs',
    'tab_item', 'menu', 'link', 'tabs', 'tab_item', 'menu',
    'menu_item', 'menu', 'menu_item'];

function amountOfElements() {
    const object = {};
    classes.forEach((key) => { object[key] = object[key] + 1 || 1; });
    return object;
}

console.log(amountOfElements());
