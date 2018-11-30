const classes = ['header', 'menu', 'menu_item', 'tabs',
    'tab_item', 'menu', 'link', 'tabs', 'tab_item', 'menu',
    'menu_item', 'menu', 'menu_item'];

function toObject(arr) {
    const result = {};
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] !== undefined) result[arr[i]] = (result[arr[i]] || 0) + 1;
    }
    return result;
}

console.log(toObject(classes));
