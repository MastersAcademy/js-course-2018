function build(num) {
    let li = num;
    const symbl = '#';
    const space = '_';
    let i = 2;

    for (li > 0; li--;) {
        i += 2;
        console.log(space.repeat(li) + symbl.repeat(i));
    }
}

build(15);
