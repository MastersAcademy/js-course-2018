const classes = ['header', 'menu', 'menu_item', 'tabs',
    'tab_item', 'menu', 'link', 'tabs', 'tab_item', 'menu',
    'menu_item', 'menu', 'menu_item'];

function getAmountsOfOccurrencesOfElements(array) {
    const resObj = {};

    function occurencesAmount(neededElem) {
        return array.filter(elem => elem === neededElem).length;
    }

    array.forEach((elem) => {
        if (!(elem in resObj)) {
            resObj[elem] = occurencesAmount(elem);
        }
    });

    return resObj;
}
console.log(getAmountsOfOccurrencesOfElements(classes));
