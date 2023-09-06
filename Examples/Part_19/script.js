"use strict";
class SimpleClass {
    simple() {
        console.log(this);      // Output: SimpleClass
    }
};

function simpleFunction() {
    console.log(this);          // Output: undefined
}

let val1 = new SimpleClass();
val1.simple();
simpleFunction();
console.log(this);              // Output: Window