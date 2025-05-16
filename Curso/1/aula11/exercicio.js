let varA = 'A'; // B 
let varB = 'B'; // C 
let varC = 'C'; // A

const valorA = varB; // metodo1 
const valorB = varC;
const valorC = varA;

console.log(valorA, valorB, valorC);

[varA, varB, varC] = [varB, varC, varA]  // Metodo 2 
console.log(varA, varB, varC);
