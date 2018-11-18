// recursion
function recur (num) {
  if (num === 2) {
    return true
  }
  if (num % 2 === 0) {
    return recur(num / 2)
  }
  return false
}
const min = 10
const max = 600
for (let i = min; i <= max; i++) {
  if (recur(i)) {
    console.log(i)
  }
}
// end recursion
