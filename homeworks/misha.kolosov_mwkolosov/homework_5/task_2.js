const classes = ['header', 'menu', 'menu_item', 'tabs',
    'tab_item', 'menu', 'link', 'tabs', 'tab_item', 'menu',
    'menu_item', 'menu', 'menu_item'];
const arrInObj = (arr) => {
    const obj = {};
    arr.forEach((item) => {
        if (item in obj) {
            obj[item] += 1;
        } else {
            obj[item] = 1;
        }
    });
    return obj;
};
console.log(arrInObj(classes));
