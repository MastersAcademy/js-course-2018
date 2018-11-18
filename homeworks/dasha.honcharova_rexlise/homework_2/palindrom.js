for (let i=500; i <=1000; i++) {
    const pal = i.toString().split('').reverse().join('');
    if (pal === i.toString()) {
        console.log(i);
    }   
}