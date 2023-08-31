function sumAll() {
    let sum = 0;
    if (arguments.length == 0) { // No arguments were passed?
        return 0; // ... then end function with 0
    }
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
let total = sumAll(20, 50, 80, 100, 170);
console.log("Result = " + total); // Output: Result = 420