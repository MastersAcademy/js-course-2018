function build(num) {
    const symbl = '#';
    const space = '_';
    let i = 2;

    for (num; num > 0; num--) {
        i = i + 2;
        console.log(space.repeat(num) + symbl.repeat(i));
    }
}

build(15);