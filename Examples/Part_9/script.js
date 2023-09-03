let user = [
    "Ali",      // [0]      
    "Jane",     // [1]
    "Pedro"     // [2]
];

console.log(user[1]);       // Output: Jane
let name01 = user[0];       // name01 = "Ali"
console.log(name01);        // Output: Ali
user[2] = "Pepito";         // "Pedro" is overwritten
console.log("user[0] = " + user[0]);    // Output: user[0] = Ali
console.log("user[1] = " + user[1]);    // Output: user[1] = Jane
console.log("user[2] = " + user[2]);    // Output: user[2] = Pepito