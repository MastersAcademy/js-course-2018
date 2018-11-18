//*
function range(nmb){
    if (nmb === 2) {
        return true;
    }
    if (nmb % 2 === 0) {
        return range(nmb / 2);
    }
    return false;
}


let start = 10;
let end = 600;
for (let i = start; i <= end; i++) {
    if (range(i) === true) {
        console.log(i);
    }
}