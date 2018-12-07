// Task 2

const classes = ['header', 'menu', 'menu_item', 'tabs',
    'tab_item', 'menu', 'link', 'tabs', 'tab_item', 'menu',
    'menu_item', 'menu', 'menu_item'];

function returnNumberOfRepetitions(array) {
    const rez = {};
    array.forEach((item) => {
        if (item in rez) {
            rez[item]++;
        } else {
            rez[item] = 1;
        }
    });

    console.log(rez);
}

returnNumberOfRepetitions(classes);
