/* eslint-disable no-console */

function kvadrat(x) {
  return x * x;
}
console.log(kvadrat(5));
console.log(kvadrat(15));
console.log(kvadrat(53));
function masiv(a, b) {
  const mas = [];
  for (let i = 0; i <= a; i += b) {
    mas.push(i);
  }
  console.log(mas);
}
masiv(50, 5);
masiv(32, 4);
function masiv2(a, b) {
  const mas2 = [];
  for (let i = 0; i <= a; i += b) {
    mas2.push(i * i);
  }
  console.log(mas2);
}
masiv2(32, 4);
function summas(a, b) {
  const mas2 = [];
  for (let i = 0; i <= a; i += b) {
    mas2.push(i * i);
  }
  function massum(massiv) {
    let sum = 0;
    for (let j = 0; j < massiv.length; j += 1) {
      sum += massiv[j];
    }
    return (sum);
  }
  console.log(massum(mas2));
}
summas(32, 4);
