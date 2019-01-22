const pieceofpyramid = '#';
const air = ' ';
let lineofpyramid;
const amlines = 15;
for (let i = 1; i <= amlines; i++) {
    lineofpyramid = air.repeat(amlines - i) + pieceofpyramid.repeat(i * 2 + 2);
    console.log(lineofpyramid);
}
