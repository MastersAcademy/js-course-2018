const classes = ['header', 'menu', 'menu_item', 'tabs',
    'tab_item', 'menu', 'link', 'tabs', 'tab_item', 'menu',
    'menu_item', 'menu', 'menu_item'];

function getAmountsOfOccurrencesOfElements(array) {
    const resObj = {};

    array.forEach((elem) => {
        if (!resObj[elem]) {
            resObj[elem] = 1;
        } else {
            resObj[elem]++;
        }
    });

    return resObj;
}

console.log(getAmountsOfOccurrencesOfElements(classes));
