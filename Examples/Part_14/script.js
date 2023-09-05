const user = ['Ali', 'Jane', 'Pedro', 'Wiktoria', 'Yui'];

console.log(user.indexOf('Jane'));      // Output: 1

// start from index 2
console.log(user.indexOf('Jane', 2));   // Output: 4

// element not contained in the array
console.log(user.indexOf('John'));      // Output: -1