const uniqueCount = (arr) => {
    const result = {};

    arr.forEach((item) => { result[item] = (result[item] || 0) + 1; });

    return result;
};

// output results

const classes = ['header', 'menu', 'menu_item', 'tabs',
    'tab_item', 'menu', 'link', 'tabs', 'tab_item', 'menu',
    'menu_item', 'menu', 'menu_item'];
console.log(uniqueCount(classes));
