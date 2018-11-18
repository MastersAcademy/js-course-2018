/*

2. Выводить в консоль все зеркальные числа (11211, 333) в диапазоне от 500 до 1000
В этом вам помогут команды и методы: toString().

***Было бы хорошо: запрашивать у пользователя минимальные и максимальные значения диапазона,
и валидировать его ввод. В этом поможет: Readline и typeof.

 */

function reverse (number) {
    let digits = number.toString().split('');
    for (let i = 0; i < ((digits.length - 1)/2); i++) {
        for (let j = digits.length - 1; j > i; j--) {
            let tmp = digits[i];
            digits[i++] = digits[j];
            digits[j] = tmp;
        }
    }
    let str = digits.join('');
    let result = parseInt(str);
    return result;
}

for (let i = 500; i <= 1000; i++) {
    if (i === reverse(i)) console.info(i);
}
