// type é um objeto que define a estrutura de um usuário
// ? serve para deixar opcional o campo especificado
type Order = {
    productId: number;
    quantity: number;
}
type User = {
  id: number;
  age : number;
  name: string;
  password?: string;
  email: string;
  orders?: Order[];
};

const user: User = {
    age: 30,
    id: 1,
    name: "John Doe",
    email: "asdas@gmail.com",  
    orders: [{productId: 1, quantity: 2}],
}
const printlog = (message : string) => {}
    
printlog(user.password!);

// Unions
type Author = {
    books: string[];
} 

const author1: Author & User = {
    id: 2,
    age: 45,
    name: "Jane Smith",
    email: "dasdas@gmail.com",  
    books: ["Book 1", "Book 2"],
    orders: [],
}
// interfaces
interface IUser {
    id: number;
    age : number;
    readonly name: string;
    password?: string;
    email: string;
    orders?: Order[];
}

const user2: IUser = {
    age: 28,
    id: 3,
    name: "Alice Johnson",
    email: "dasdas@gmail.com",  
}