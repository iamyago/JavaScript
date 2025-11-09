let age = 25;
// mesmo sem definir o tipo da variavel, o typescript infere o tipo automaticamente
const nome = "John Doe";
const isStudent = true;
let idk = 5;
// tipo any se refere a tipagem dinamica. Pode receber qualquer tipo de valor
const ids = [1, 2, 3, 4, 5];
// Tuplas - especie de array com tipos diferentes, não precisa ser necessariamente do mesmo tipo
const person = [1, "Alice", true];
// intersection types - pode ser mais de um tipo
const product = 2;
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
const move = Direction.Up;
console.log(move);
export {};
//# sourceMappingURL=index.js.map