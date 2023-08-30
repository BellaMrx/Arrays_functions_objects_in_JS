# Arrays_functions_objects_in_JS

 Arrays, functions and objects in JavaScript

---------------------------------------------

## Content
 1. Functions in JavaScript
 2. 
 3. 
 4. 
 5. 
 6. 
 7. 


---------------------------------------------

# 1. Functions in JavaScript
 Functions are subprograms with repeating JavaScript statements that are grouped into a block and called using the function name and optional arguments. Functions in JavaScript are real objects (first-class objects) and variables can be assigned to them. Likewise, functions can be used as parameters or return values of functions.

## There are several ways to create a function in JavaScript:
### Function declaration

 - a function is introduced with the keyword `function`
 - followed by the function name and the pair of parentheses `()`
 - function names are subject to the same restrictions as variable names
 - within the pair of parentheses optionally a list of formal parameters can be noted, several parameters are separated with a comma `,`
 - the code or statement is written between the braces `{}`

 [Complete Code](https://github.com/BellaMrx/Arrays_functions_objects_in_JS/blob/main/Examples/Part_1/script.js) --> **Examples/Part_1/...** 
   ```
    function sum(parameter1, parameter2) {
        // Code for function
        let sum = parameter1 + parameter2;
        return sum;
    }
    let val1 = 200,
        val2 = 100;
    let total = sum(val1, val2); // Call function
    console.log("Result = " + total); // Output: Result = 300
   ```

The function is executed when the function `sum()` is called with the arguments `200`, `100`. Such a function can optionally return a value to the caller with `return` if further work with the value is required. If no value needs to be returned from a function, the `return` statement can be left behind. JavaScript does not require a semicolon at the end of the curly braces of the function block.


### Function expression

A function expression works similarly to the function declaration, except that the function is assigned to a variable, and this reference variable then refers to the function object and can be used. A function expression omits a function name, which makes it an anonymous function.

 [Complete Code](https://github.com/BellaMrx/Arrays_functions_objects_in_JS/blob/main/Examples/Part_2/script.js) --> **Examples/Part_2/...** 
   ```
    let sum = function(parameter1, parameter2) {
        return parameter1 + parameter2;
    }
    let val1 = 100,
        val2 = 200;
    let total = sum(val1, val2); // Call function
    console.log("Result = " + total); // Output: Result = 300
   ```

#### When to use a function declaration or a function expression?
With a function declaration the function must be given a name to be able to call this function with the name. With a function expression a name is optional and can be called via the variable that was assigned to the function.


## Call functions and function parameters 