const N = 15;
const str = ' ';
const str2 = '##';
for (let i = 0; i < N; i++) {
    console.log(str.repeat(N - i) + str2.repeat(i + 2));
}
