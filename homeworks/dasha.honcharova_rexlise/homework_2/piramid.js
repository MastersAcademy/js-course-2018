const lines = 15;
const a = ' ';
const b = '##';
for(let i = 0; i < lines; i++){

    console.log(a.repeat(lines - i) + b.repeat(i + 2));

}
