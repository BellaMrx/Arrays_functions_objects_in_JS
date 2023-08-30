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

 - a function is introduced with the keyword `function`
 - followed by the function name and the pair of parentheses `()`
 - function names are subject to the same restrictions as variable names
 - within the pair of parentheses optionally a list of formal parameters can be noted, several parameters are separated with `,`
 - the code or statement is written between the braces `{}`

 [Complete Code](https://github.com/BellaMrx/...index.html) --> **Examples/Part_1/...** 
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