let height = 15; //height pyramid
let space =' ';
let hesh ='#';
let amountSpace = height;
let amountHesh = 2;

for (let i = 0; i < height; i++){
    amountHesh = amountHesh + 2;
    amountSpace--;
    let printHesh = hesh.repeat(amountHesh);
    let printSpace = space.repeat(amountSpace);  
    console.log(printSpace + printHesh);
}
