let num1 = 10.25; // number
let num2 = 2.5; // number

// console.log(num1.toString() + num2); força o numero a virar string, não altera a variavel e sim retorna a string

// num1 = num1.toString(); Transforma o number em string.
// console.log(num1.toString(2)); Retorna em numero binario 
// console.log(num1.toFixed(3)); arredonda o numero na casa decimal.
// console.log(Number.isInteger(num1)); True para numeros inteiros e false para numeros decimais;
let temp = num1 * 'ola';
console.log(Number.isNaN(temp));