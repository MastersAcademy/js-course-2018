// piramida
const a = '##'
const b = ' '
for (let i = 1; i <= 15; i++) {
  console.log(b.repeat(15 - i) + a.repeat(i + 1))
}
// end
