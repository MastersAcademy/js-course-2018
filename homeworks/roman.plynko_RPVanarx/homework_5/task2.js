function sorting(mass) {
    const newObj = {};
    mass.forEach((element) => {
        if (element in newObj) {
            newObj[element] += 1;
        } else {
            newObj[element] = 1;
        }
    });
    return newObj;
}

const classes = ['header', 'menu', 'menu_item', 'tabs',
    'tab_item', 'menu', 'link', 'tabs', 'tab_item', 'menu',
    'menu_item', 'menu', 'menu_item'];

console.log(sorting(classes));
