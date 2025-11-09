let age: number = 25;
// mesmo sem definir o tipo da variavel, o typescript infere o tipo automaticamente
const nome: string = "John Doe";
const isStudent: boolean = true
let idk: any = 5;
// tipo any se refere a tipagem dinamica. Pode receber qualquer tipo de valor
const ids: number[] = [1, 2, 3, 4, 5];
// Tuplas - especie de array com tipos diferentes, não precisa ser necessariamente do mesmo tipo
const person : [number, string, boolean] = [1, "Alice", true];
// intersection types - pode ser mais de um tipo
const product: string | number = 2;
// enum
enum Direction {
    Up = 1,
    Down = 2,
    Left = 3,
    Right = 4
}
const move: Direction = Direction.Up;

// type assertion
const productName: any = "Book";
// let itemId = productName as string;
let itemId = <string>productName;
