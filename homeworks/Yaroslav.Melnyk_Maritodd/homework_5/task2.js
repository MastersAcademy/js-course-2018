const classes = ['header', 'menu', 'menu_item', 'tabs', 'tab_item', 'menu', 'link', 'tabs', 'tab_item', 'menu', 'menu_item', 'menu', 'menu_item'];

function counter(arr) {
    const obj = {};
    arr.forEach((element) => {
        if (element in obj) {
            obj[element] += 1;
        } else {
            obj[element] = 1;
        }
    });
    return obj;
}

console.log(counter(classes));
