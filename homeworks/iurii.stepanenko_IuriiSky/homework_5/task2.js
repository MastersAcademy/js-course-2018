const clases = ['header', 'menu', 'menu_item', 'tabs',
    'tab_item', 'menu', 'link', 'tabs', 'tab_item', 'menu',
    'menu_item', 'menu', 'menu_item'];

function returnKey(params) {
    const obj = {};
    params.forEach((element) => {
        if (obj[element] === undefined) {
            Object.defineProperty(obj, element, {
                enumerable: true,
                configurable: false,
                writable: true,
                value: 1,
            });
        } else {
            obj[element]++;
        }
    });
    return obj;
}

console.log(returnKey(clases));
