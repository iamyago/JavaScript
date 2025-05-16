// arrays são indexados por elementos e não por índices de cada letra como nas strings.

//                0       1        2

const alunos = ['Yago', 'Maria', 'João']; // um array é uma lista de coisas

console.log(typeof alunos); // retorna um object e não um array
console.log(alunos instanceof Array); // Pergunta se é um array


// console.log(alunos.slice(0, 3)); // corta os array não desejados

// const removido = alunos.shift(); // shift remove do inicio do array
// const removido = alunos.pop(); // pop remove do fim do array
// console.log(alunos);
// console.log(removido);

// alunos.unshift('Luiza'); // adiciona sempre ao primeiro indice e move os indices para frente
// alunos.unshift('Gabriel'); 

// alunos.push('Erik'); // coloca sempre no final do array 
// alunos.push('Fabio');

// alunos[alunos.length] = 'Vinicius' // adiciona o elemento ao final do array
// console.log(alunos); // .lenght diz quantas casas tem no array

// alunos[1] = 'Pedro'; // troca o indice especifico
// alunos[3] = 'Luiza'; // adiciona um array sem estar indexado


// console.log(alunos[0]); Descobre o array especifico