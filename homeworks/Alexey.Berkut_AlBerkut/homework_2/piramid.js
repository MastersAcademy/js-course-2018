function build(num){
    let symbl = '#';
    let space = '_';
    let i = 2;

    for(num > 0; num--;){
        i = i + 2;
        console.log(space.repeat(num) + symbl.repeat(i));
    }
}

build(15);