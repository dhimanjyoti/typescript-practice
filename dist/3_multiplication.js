"use strict";
for (let i = 1; i <= 10; i++) {
    let row = "7 * " + i + "=" + i * 7;
    console.log(row);
}
for (let i = 1; i <= 10; i++) {
    printTable(i);
    console.log();
}
function printTable(n) {
    for (let i = 1; i <= 10; i++) {
        let row = n + " * " + i + " = " + n * i;
        console.log(row);
    }
}
//# sourceMappingURL=3_multiplication.js.map