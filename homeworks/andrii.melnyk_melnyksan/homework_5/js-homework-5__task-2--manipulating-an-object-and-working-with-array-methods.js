// Create a function which returns object with the keys that consist of the element of source array
// and the values that is number of repetitions of identical array elements.

// Source array:

const classes = ['header', 'menu', 'menu_item', 'tabs',
    'tab_item', 'menu', 'link', 'tabs', 'tab_item', 'menu',
    'menu_item', 'menu', 'menu_item'];

// Expected result:

// {
//     header: 1,
//     link: 1,
//     menu: 4,
//     menu_item: 3,
//     tab_item: 2,
//     tabs: 2,
// };

// I don't know how to do it, now. But...
// Let's See... Let's to know something new ;)

function arrangeAndCalculateClasses(sourceArray) {
    const someObject = {};
    sourceArray.sort().forEach((key) => {
        someObject[key] = (key in someObject) ? someObject[key] + 1 : 1;
    });
    return someObject;
}

const objectWithArrangedAndCalculatedClasses = arrangeAndCalculateClasses(classes);

console.log(objectWithArrangedAndCalculatedClasses);
