console.log("Hello World");

var str = "#",
    space = " ",
    top = 4,  // ширина вершины
    height = 20; // высота пирамиды
    //i;

var z = height; // ширина основания пирамиды = height * 2 + top

for (let i = 1; i <= height; i++) {
    z = z - 1; // отступ перед пирамидой
    console.log(space.repeat(z) + str.repeat(top));
    top = top + 2;
}

console.log("Отступов перед пирамидой - " + z); // ширина основания
console.log("Ширина основания пирамиды - " + top); // ширина основания