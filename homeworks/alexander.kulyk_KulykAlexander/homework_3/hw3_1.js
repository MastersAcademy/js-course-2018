// Task 1.1
console.log('Task 1.1')

function calcSquare (a) {
  return a * a
}
let test1 = calcSquare(5)
console.log(test1)
let test2 = calcSquare(15)
console.log(test2)
let test3 = calcSquare(53)
console.log(test3)
// end Task 1.1

// Task 1.2
console.log('Task 1.2')
const ryd = []
function plus (j, k) {
  let b = 0
  ryd.push(b)
  while (b < j) {
    b += k
    ryd.push(b)
  }
}
plus(32, 4)
console.log(ryd)
// end Task 1.2

// Task 1.3
console.log('Task 1.3')

const newryd = ryd.map(calcSquare)
console.log(newryd)
// end Task 1.3

// Task 1.4
console.log('Task 1.4')

let total = newryd.reduce(function (p, o) {
  return p + o
})
console.log(total)
// end Task 1.4
