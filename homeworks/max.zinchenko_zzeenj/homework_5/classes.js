const classes = ['header', 'menu', 'menu_item', 'tabs',
    'tab_item', 'menu', 'link', 'tabs', 'tab_item', 'menu',
    'menu_item', 'menu', 'menu_item'];
function counter(mass) {
    const result = {};
    mass.forEach((element) => {
        if (element in result) {
            result[element] += 1;
        } else {
            result[element] = 1;
        }
    });
    return result;
}
console.log(counter(classes));
