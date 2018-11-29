const  obj = {b: "c", d:{e: "f"}};
const keys = Object.keys(obj);
const newObj = {};
keys.forEach(function(key) {
  newObj[key] = obj[key];
});
console.log(newObj);