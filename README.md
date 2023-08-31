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
Parameters are placeholders for current values - which are called arguments. In function `sum(param1, param2)` `param1` and `param2` are parameters, when calling `sum(200, 100)` current values are used as arguments.

If the function has been defined, it can be called via the function name. If a function expects parameters, these are grouped between brackets `()`, individual parameters are separated with a comma `,`. The brackets `()` after a function call must always be set even if the function does not contain any parameters.

   ```
    function sum() {
        // Code for function
    }
    sum();
   ```

When a function is called with fewer or more arguments than parameters were specified in the function declaration. If too few arguments were used in the call, the missing arguments are initialized with the default value `undefined`.

   ```
    function exampleFunc(param1) {
        console.log(param1);    // Output: undefined
    }
    exampleFunc();
   ```
Here the function `exampleFunc()` was called without an argument, therefore the value of the parameter `param1` in the function was initialized with the default value `undefined`. Not necessarily to imitate but that's how you could react to it:

   ```
    function exampleFunc(param1) {
        if (param1 === undefined) {
            console.log("exampleFunc(): No argument!");
        } else {
        console.log(param1);
        }
    }
   ```

Alternatively, you can also continue working with a function if default values are used for omitted arguments. JavaScript knows the principle of default parameters when no corresponding argument has been passed to the function. Thanks to default parameters, functions can be called with none, one or two arguments:

 [Complete Code](https://github.com/BellaMrx/Arrays_functions_objects_in_JS/blob/main/Examples/Part_3/script.js) --> **Examples/Part_3/...** 
   ```
    function userTemplate(fname = "Joe", lname = "Public") {
        let user = {
            userfname: fname,
            userlname: lname
        }
        return user;
    }

    let user1 = userTemplate();
    console.log(user1.userfname);       // Output: Joe
    console.log(user1.userlname);       // Output: Public
    let user2 = userTemplate("Jane");
    console.log(user2.userfname);       // Output: Jane
    console.log(user2.userlname);       // Output: Public
    let user3 = userTemplate("Pepito", "Perez");
    console.log(user3.userfname);       // Output: Pepito 
    console.log(user3.userlname);       // Output: Perez
   ```

If a function is to be called with arguments, it can be accessed with the **arguments object**. The **arguments object** is an array-like object with arguments `arguments[n]`, `n` stands for the number of arguments. The first argument starts with `arguments[0]`. The number of arguments are determined with `arguments.length`.

 [Complete Code](https://github.com/BellaMrx/Arrays_functions_objects_in_JS/blob/main/Examples/Part_4/script.js) --> **Examples/Part_4/...** 
   ```
    function sumAll() {
        let sum = 0;
        if (arguments.length == 0) {        // No arguments were passed?
            return 0;                       // ... then end function with 0
        }
        for (let i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }
        return sum;
    }
    let total = sumAll(20, 50, 80, 100, 170);
    console.log("Result = " + total);       // Output: Result = 420
   ```

Here all passed values are added using the **arguments object**. In practice, this is now implemented using the **Rest parameter**.

With the rest parameter there is the possibility to use a function with any number of function parameters. The rest parameter is a real array.

 [Complete Code](https://github.com/BellaMrx/Arrays_functions_objects_in_JS/blob/main/Examples/Part_5/script.js) --> **Examples/Part_5/...** 
   ```
    function sumAll(iVal, ...myargs) {
        var sum = iVal;
        myargs.forEach(function(val) {
            sum += val;
        });
        return sum;
    }
    console.log(sumAll(100, 200, 300, 400));    // Output: 1000
   ```

The first parameter with `iVal` is an ordinary parameter with the value 100. The remaining parameters are defined with `_myargs` (200, 300, 400). The remaining parameters are accessed with the `forEach() ` method, which calls the function written in `myargs` for each value of the array. The current value is passed to `val` as a parameter in each case. Thus, each value in the `myargs` array is added to the `sum` variable and returned at the end.

It is somewhat clearer with the Arrow function notation:
   ```
    let sumAll = (iVal, ...myargs) => {
        let sum = iVal;
        myargs.forEach((val) => sum +- val);
        return sum;
    }
   ```