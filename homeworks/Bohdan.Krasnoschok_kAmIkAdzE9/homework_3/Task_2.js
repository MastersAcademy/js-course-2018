function MyFunction (num) {
    if(num === 1) {
        return true;
    }
    if(num === 0) {
        return false;
    }
    return MyFunction(num / 2);
}

for(let i = 10; i < 600; i++) {
    if(MyFunction(i) === true) {
        console.log(i);
    }
}
