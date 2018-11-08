//Get the number from the console
var readline = require('readline');
var r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
r1.question("Введите количество символов (от 100 до 99999): ", function(num) {
    func (num);
    r1.close();
});
//The function of calculating mirror numbers.
function func (num){
    for (var i=1;i<=num;i++){
    var str =String(i);
        if (str.length===3) {
            if (str[0]===str[2]) {
                console.log(str);
            }
        }
        if (str.length===4) {
            if (str[0]===str[3]&&str[1]===str[2]){
                console.log(str);
            }
        }
        if (str.length===5) {
            if (str[0]===str[4]&&str[1]===str[3]){
            console.log(str);
            }
        }
        if (num<100||num>99999||num===0) {
            console.log("Ошибка ввода");
            return;
        }
    }
}
