var maxValue = 15, strSpace, strHash;

for (let i = 0; i < maxValue; i++) {
    strSpace = "";
    strHash = "###";
    for (let j = 0; j < maxValue - i; j++) strSpace += " ";
    for (let j = 0; j < 2 * i + 1; j++) strHash += "#";
    console.log(strSpace + strHash);
}
