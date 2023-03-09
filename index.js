const number = parseFloat(prompt("Qual número deve ser multiplicado?"));

let multiple = "";

for (let count = 1; count < 21; count++) {
  multiple += ` -> ${number} x ${count} = ${number * count}\n`;
}

alert(multiple);
