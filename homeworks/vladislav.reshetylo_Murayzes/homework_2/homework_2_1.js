let height = 15; //height pyramid
let space =' ';
let hash ='#';
let amountSpace = height;
let amountHash = 2;

for (let i = 0; i < height; i++){
    amountHash = amountHash + 2;
    amountSpace--;
    let printHash = hash.repeat(amountHash);
    let printSpace = space.repeat(amountSpace);  
    console.log(printSpace + printHash);
}
