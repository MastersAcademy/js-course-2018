const classes = ['header', 'menu', 'menu_item', 'tabs',
    'tab_item', 'menu', 'link', 'tabs', 'tab_item', 'menu',
    'menu_item', 'menu', 'menu_item'];

function propertyCounter(arr) {
    const result = {};

    arr.sort().reduce((returnedObj, current) => {
        if (Object.prototype.hasOwnProperty.call(returnedObj, current)) {
            result[current]++;

            return result;
        }
        result[current] = 1;

        return result;
    }, {});

    return result;
}

console.log(propertyCounter(classes));
