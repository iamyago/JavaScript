// strings são indexadas 
// barra inversa para escapar o caractere
let umaString = 'O rato roeu a roupa do rei de roma';

console.log(umaString.toUpperCase()); // deixa em maiusculo
console.log(umaString.slice(2, 6)); // corta o texto 
console.log(umaString.length); // quantas caracteres tem na frase ou texto
console.log(umaString.replace('Um', 'Outra')); // substitui as strings
console.log(umaString.match(/[a-z]/g)) // expressão regular
console.log(umaString.lastIndexOf(`o`)); // começa de tras pra frente
console.log(umaString.indexOf(`texto`)); // descobre o inicio do texto
console.log(umaString.charAt(1)) // descobre a posição da letra
console.log(umaString.split(' ')) // pega todas as palavras do nome
console.log(umaString + ' em um lindo dia ');
console.log(`${umaString} em um lindo dia. `);

let duasStrings = 'Um apenas'
duasStrings.replace('um', 'outra');
console.log(duasStrings);
