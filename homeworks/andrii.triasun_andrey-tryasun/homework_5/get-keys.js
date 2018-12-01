// function returns an object with the keys of the array elements

const classes = [
    'header',
    'menu',
    'menu_item',
    'tabs',
    'tab_item',
    'menu',
    'link',
    'tabs',
    'tab_item',
    'menu',
    'menu_item',
    'menu',
    'menu_item',
];

const getKeys = (array) => {
    const obj = {};
    array.forEach((element) => {
        obj[element] = obj[element] ? ++obj[element] : 1;
    });
    return obj;
};

console.log(getKeys(classes));
// { header: 1, menu: 4, menu_item: 3, tabs: 2, tab_item: 2, link: 1 }
