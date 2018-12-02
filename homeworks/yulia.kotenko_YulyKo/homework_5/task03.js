const object = {
    menu: {
        logo: 'Dreams',
        item: 'About',
    },
    content: 'article',
};

const objectCopy = Object.assign({}, object);

console.log(objectCopy.menu);
