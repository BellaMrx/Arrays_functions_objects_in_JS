let user = [
    "Ali",      // [0]      
    "Jane",     // [1]
    "Pedro"     // [2]
];

user[3] = "Wiktoria";
user[5] = "Yui";
user[2] = undefined;    // delete value

for (let i = 0; i < user.length; i++) {
    console.log(user[i]);
}