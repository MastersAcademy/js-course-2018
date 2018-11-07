
for (let i = 500; i < 1000; i++) {
    let nomber = i;
    let newN = nomber.toString();
    if (newN[0]===newN[1] && newN[1]===newN[2]) {
        console.log(nomber);
    }else if (newN[0]===newN[2] && newN[0]!==newN[1]) {
        console.log(nomber);
    }
}