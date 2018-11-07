   
    let spase = " ";
    let grille = "#";
    for (let i = 0; i < 10; i++) {
        console.log(spase.repeat(9-i) + grille.repeat(2+i) + grille.repeat(2+i) + spase.repeat(9-i));
    }