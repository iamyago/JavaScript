const nome = 'Yago Erik';
const sobrenome = ' Santiago ';
const idade = 18;
const peso = 66;
const alturaEmM = 1.80;
let imc; // peso / (altura * altura)
let anoNascimento;
imc = peso / (alturaEmM * alturaEmM);
console.log(imc)
anoNascimento = 2024 - idade
console.log(anoNascimento)
let nomeCompleto = nome + sobrenome
console.log(nomeCompleto);
// template strings = ${}