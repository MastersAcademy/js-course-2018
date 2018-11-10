;

let i = 2, j = 0; 
let length = 17;  

while (i < length) {
    let space = "", lattice = "";
        for (j = 0; j < length - i; j++) space += " ";
        for (j = 0; j < 2 * i; j++) lattice += "#";
            console.log(space + lattice);
        i++;
};