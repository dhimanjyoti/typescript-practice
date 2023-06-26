// Coding challenge #3: Print the multiplication table with 7
/* 
7 * 1 = 7
7 * 1 = 14 
 */
for (let i = 1; i <= 10; i++) {
  let row: string = "7 * " + i + "=" + i * 7;
  console.log(row);
}

// Coding challenge #4: Print all the multiplication tables with numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  printTable(i);
  console.log();
}

function printTable(n: number) {
  for (let i = 1; i <= 10; i++) {
    let row: string = n + " * " + i + " = " + n * i;
    console.log(row);
  }
}
