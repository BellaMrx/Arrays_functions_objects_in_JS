# Arrays_functions_objects_in_JS

 Introduction: Arrays, functions and objects in JavaScript

---------------------------------------------

## Content
 1. Functions
 2. Arrays
 3. Strings and regular expressions
 4. Object-oriented programming 
 5. More global objects
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
The first parameter with `iVal` is an ordinary parameter with the value 100. The remaining parameters are defined with `_myargs` (200, 300, 400). The remaining parameters are accessed with the `forEach()` method, which calls the function written in `myargs` for each value of the array. The current value is passed to `val` as a parameter in each case. Thus, each value in the `myargs` array is added to the `sum` variable and returned at the end.

It is somewhat clearer with the Arrow function notation:
   ```
    let sumAll = (iVal, ...myargs) => {
        let sum = iVal;
        myargs.forEach((val) => sum += val);
        return sum;
    }
   ```

## Return value of a function
If a value is to be returned from a function, a `return` statement must be used. The `return` statement specifies the value to be returned. Functions without a `return` statement use a default value which is `undefined` in most cases. After a `return` statement in a function, execution returns to the caller.

 [Complete Code](https://github.com/BellaMrx/Arrays_functions_objects_in_JS/blob/main/Examples/Part_6/script.js) --> **Examples/Part_6/...** 
   ```
    let isDebug = true;

    function debugMessage() {
        if (isDebug) {
            return 'Debug mode is active';
        }
        return 'Debug mode is deactivated';
    }

    var message = debugMessage;     // assign function to variable
    console.log(typeof message);    // function
    var txt = message();            // call debugMessage()
    console.log(txt);               // Output: Debug mode is active
    isDebug = false;
    console.log(message());         // Output: Debug mode is deactivated
   ```
Here, the `debugMessage` function was passed to the `message` variable rather than calling the `debugMessage` function and passing the return value to `message`. With this assignment, a variable `message` was created that points to the function object `debugMessage` and can be called explicitly as a function practically like `debugMessage`.


## The scope of variables in a function
Each function creates a new scope, but not a block scope as it would be the case in other programming languages.
   ```
    let iVal = 222;     // global variable

    function simple(parameter1) {
        if (parameter1) {
            var sVal = 444;
        }
        return sVal + iVal;     // possible because of variables hosting
    }

    let sumUp = simple(true);
    console.log(sumUp);
    console.log(sVal + iVal);   // Error: sVal is unknown
   ```
The variable `iVal` is a global variable and can be used both inside and outside the function. The variable `sVal` can only be used in the function `simple()`. Therefore `console.log(sVal + iVal)`, will result in the error message. This is the scope that JavaScript generates for each function.

However, JavaScript does not create a block scope inside the `if` block here. JavaScript uses variable hosting here:
   ```
    function simple(parameter1) {
        var sVal;
        if (parameter1) {
            sVal = 444;
        }
        return sVal + iVal;
    }
   ```
That a variable is declared inside an `if` block within a function with `var` and is also used outside the `if` block within the function is not always desired and can lead to errors.

For this there is an alternative the keyword `let`, which is used instead of `var`. A `let` variable gets a block scope and is thus only usable in the current code block:
   ```
    function simple(parameter1) {
        if (parameter1) {
            let sVal = 444;     // block scope with let
            console.log(sVal);  // sVal now only valid within the if block
        }
        return sVal + iVal;     // Error : sVal is unknown
    }
   ```
With the keyword `let` it becomes possible to restrict the scope of a variable to individual code blocks.

In JavaScript it is also possible to define functions within functions, so that they are only usable and valid within the function:

 [Complete Code](https://github.com/BellaMrx/Arrays_functions_objects_in_JS/blob/main/Examples/Part_7/script.js) --> **Examples/Part_7/...** 
   ```
    function divide(x, y) {
        return normalize(x) / normalize(y);

        function normalize(val) {
            if (val == 0) {
                return 1;
            }
            return val;
        }
    }
    console.log(divide(4, 0));
   ```

Inside the function `normalize()` is called, which checks if one of the values is 0, and then makes it a 1 if necessary. Calling the function `normalize()` outside the function `divide()` would lead to an error.


## Arrow functions
With arrow functions it is possible to define functions with relatively little effort. Above all, they have the advantage that the `this` keyword within the function refers to the context in which the function was defined. And not, as with a normal function, on the context in which the function is executed.
   ```
    let multiply = val => val * 2;
    console.log(multiply(200));     // Output: 400
   ```

When using multiple parameters:
   ```
    let sum = (param1 + param2) => param1 + param2;
    console.log(sum(200, 400));     // Output: 600   
   ```

The shorter version of the function:
   ```
    let sum = function(param1, param2) {
        return param1 + param2;
    }
   ```

For the arrow function the function body is omitted. This is only possible if the statement of the function consists of only one statement. If there are several statements, the curly brackets `{}` must also be noted:
   ```
    let debug = message => {
    console.log("debug output -> ");
    console.log(message);
    console.log("<- debug output");
    }

    let val = 9876;
    debug("Current value val (" + val + ")");
   ```

As soon as the function consists of several lines, a 'return' statement must be used:
   ```
    let multiply = (param1, param2) => {
        console.log("Multiplication is executed");  
        return param1 + param2;    
    }
    console.log(multiply(4, 20));  
   ```

For a function without parameters, the empty function brackets `()` must be noted:
   ```
    let noPara = () => console.log("Function without parameter"); 
    noPara();
   ```

## Use functions in a website
When a button has been clicked (`click` event), it is intercepted with a so-called event listener (`document.addEventListener()`) and then a corresponding JavaScript function (`calculateSum()` and `calculateMultiply()`). In the function, the corresponding values of the `input` element are read, calculated and passed to the JavaScript function (`showResult`) for output, and the output of the calculation then appears in a text box.

 [Complete Code](https://github.com/BellaMrx/Arrays_functions_objects_in_JS/blob/main/Examples/Part_8) --> **Examples/Part_8/calc.js...** 
   ```
    document.addEventListener('DOMContentLoaded', function() {
        let button1 = document.getElementById('button-calculate-sum');
        button1.addEventListener('click', calculateSum);
        let button2 = document.getElementById('button-calculate-multiply');
        button2.addEventListener('click', calculateMultiply);
    });

    function calculateSum() {
        let x = parseInt(document.getElementById('field1').value);
        let y = parseInt(document.getElementById('field2').value);
        let result = x + y;
        showResult(result);
    }

    function calculateMultiply() {
        let x = parseInt(document.getElementById('field1').value);
        let y = parseInt(document.getElementById('field2').value);
        let result = x * y;
        showResult(result);
    }

    function showResult(result) {
        let resultField = document.getElementById('result');
        resultField.value = result;
        console.log(result);
    }
   ```

 ![Preview](images/Preview_Part_8.png)


# 2. Arrays
If several values are to be stored in a variable, this is possible with an array. An array is created by assigning several values to a variable in a square bracket `[]`.
   ```
    let user = ["Ali", "Jane", "Pedro"];
   ```

same without array:
   ```
    let user01 = "Ali";
    let user01 = "Jane";
    let user01 = "Pedro";
   ```

If there are many entries in the array, it is better to list the values one below the other:
   ```
    let user = [
        "Ali", 
        "Jane", 
        "Pedro",
        "Wiktoria",
        "Yui"
    ];
   ```

Arrays can also contain entries with different data types:
   ```
    let user = [
        "John", 
        "Public", 
        32,
        john@email.com,
        true
    ];
   ```

An empty array can also be created:
   ```
    let user = [];      // empty array
   ```

An array can also be created using a constructor function with `new`:
   ```
    let user = new Array();      // empty array
   ```

Arrays can also be attached with a certain size, but this is not really necessary since an array can grow dynamically at runtime:
   ```
    let user = new Array(12);      // 12 undefined elements
   ```

Specifying the length of an array is only possible if the constructor function of `Array()` is called with a single decimal value as argument:
   ```
    let user = new Array("Ali", "Jane", "Pedro");
   ```

For the arrays with `array()` the keyword `new` can also be omitted. The notation with the square brackets `[]` and without `new` is the array literal notation, and the one with `new` is the constructor notation.


## Access to the individual elements in the array
Access to the individual elements of an array is done with the square brackets and the corresponding index number. The first element in an array always has the index `[0]`, the second element the index `[1]` and so on.

 [Complete Code](https://github.com/BellaMrx/Arrays_functions_objects_in_JS/blob/main/Examples/Part_9/script.js) --> **Examples/Part_9/...** 
   ```
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
   ```

This is an example of how to use the `Date` object and the `getDay()` method, with an array (containing all the days of the week), to get the current day of the week:

 [Complete Code](https://github.com/BellaMrx/Arrays_functions_objects_in_JS/blob/main/Examples/Part_10/script.js) --> **Examples/Part_10/...** 
   ```
    let date = new Date();
    let day = date.getDay();
    let weekday = [
        "Sunday",       // weekday[0]
        "Monday",       // weekday[1]
        "Tuesday",      // weekday[2]
        "Wednesday",    // weekday[3]
        "Thursday",     // weekday[4]
        "Friday",       // weekday[5]
        "Saturday"      // weekday[6]
    ];
    console.log("Today is " + weekday[day]);
   ```


## Multidimensional arrays
An array can also be used inside another array, usually such structures are represented as an object and not as an array:
   ```
    let user = [
        "phoenix420",       // nickname
        24,                 // age
        "ash@phoenix.com",  // e-mail
        false               // admin privileges
    ];
   ```
This is an array for one user and his characteristics. If now several users with the same data are created, this can be realized with multidimensional arrays:

 [Complete Code](https://github.com/BellaMrx/Arrays_functions_objects_in_JS/blob/main/Examples/Part_11/script.js) --> **Examples/Part_11/...** 
   ```
    let user = [
        ["phoenix420",          // [0][0]
            24,                 // [0][1]
            "ash@phoenix.com",  // [0][2]
            false               // [0][3]
        ],
        ["Ced_Lord",             // [1][0]
            11,                 // [1][1]
            "cedric@lord.com",  // [1][2]
            false               // [1][3]
        ],
        ["granny",              // [2][0]
            67,                 // [2][1]
            "granny@lord.com",  // [2][2]
            true                // [2][3]
        ]
    ];
    
    console.log(user[1][0]);    // Output: lord777
    console.log(user[1][1]);    // Output: 12
    console.log(user[1][2]);    // Output: cedric@lord.com
    console.log(user[1][3] ? "Admin" : "User"); // Output: User
   ```


## Add or remove new elements from an array
There are several methods for adding and removing elements in arrays. Of course, it is also possible to use the index operator, but this can produce undefined holes in the array.

 [Complete Code](https://github.com/BellaMrx/Arrays_functions_objects_in_JS/blob/main/Examples/Part_12/script.js) --> **Examples/Part_12/...** 
   ```
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
   ```
Here holes were created for the elements `user[2]` and `user[4]`, so the content is `undefined`. It is possible to check this in a loop (`=undefined`) to assign the element to the empty space to close the hole. But in practice it is better not to create holes. Here the `for` loop also used the `length` property, which contains the number of elements in an array.

Arrays can be traversed more comfortably with the **for ... in** and **for... of** loop.

 - for ... in
   ```
    let user = [
        "Ali",      // [0]      
        "Jane",     // [1]
        "Pedro"     // [2]
    ];

    for (let n in user) {
        console.log(user[n]);
    }
   ```

 - for... of
   ```
    let user = [
        "Ali",      // [0]      
        "Jane",     // [1]
        "Pedro"     // [2]
    ];

    for (let n of user) {
        console.log(n);
    }
   ```
The **for... of** loop is a bit more comfortable than the **for ... in** loop. This is because with the **for... of** loop only the property values of the iterable properties can be traversed and thus `user[n]` can be omitted.

### Short overview of common methods for adding or removing elements in the array
| Method       | Description                           |
|------------- | ------------------------------------- |
| `pop()`      | last element in the array is removed |
| `push()`     | a new element is added to the end of the array |
| `shift()`    | removes the first element in the array |
| `unshift()`  | inserts an element at the beginning of the array |
| `slice()`    | extract elements from an array |
| `splice()`   | add, replace or delete element(s) at any position in the array |

 - `pop()`
	- always removes the last element in the array and therefore takes no argument
	- the return value is the last element or `undefined` (if no element is left in the array)

   ```
    let user = ["Ali", "Jane", "Pedro", "Wiktoria", "Yui"]; // array

    let n = user.pop(); // remove last element -> Yui
    console.log(n + " has been removed")
    user.pop(); // remove last element again -> Wiktoria
    console.log(user.length); // Output: 3

    for (let n of user) {
        console.log(n);
    } // Output:  Ali, Jane, Pedro
   ```

 - `push()`
	- adds one or more elements to the end of the array
	- the element to be added is passed as argument
	- the method returns the length of the array

   ```
    let user = []; // empty array

    user.push("Ali");
    user.push("Jane");
    console.log(user.length); // Output: 2
    let size = user.push("Pedro", "Wiktoria", "Yui");
    console.log(size) // Output: 5

    for (let n of user) {
        console.log(n);
    } // Output:  Ali, Jane, Pedro, Wiktoria, Yui
   ```

- `shift()` 
    - removes the first element in the array

   ```
    let user = ["Pedro", "Wiktoria", "Yui", "Jane", "Ali"];

    let n = user.shift(); // remove first element -> Pedro
    console.log(n + " has been removed")
    user.shift(); // remove first element again
    console.log(user.length); // Output: 3

    for (let n of user) {
        console.log(n);
    } // Output:  Yui, Jane, Ali
   ```

- `unshift()`
    - inserts an element at the beginning of the array

   ```
    let user = []; // empty array

    user.unshift("Ali");
    user.unshift("Jane");
    console.log(user.length); // Output: 2
    let size = user.unshift("Pedro", "Wiktoria", "Yui");
    console.log(size) // Output: 5

    for (let n of user) {
        console.log(n);
    } // Output:  Pedro, Wiktoria, Yui, Jane, Ali
   ```

- `slice()`
    - extract elements from an array 

   ```
    let user = ["Ali", "Jane", "Pedro", "Wiktoria", "Yui"];
    console.log(user.slice(2, 4)); // Output: Pedro, Yui
   ```

- `splice()`
    - add, replace or delete element(s) at any position in the array 
    - several arguments are passed to the method =>
	- the first one is the relevant position where the new element will be added, removed or replaced
	- the second argument gives the number of elements to be deleted starting from this position
	- 0 is used when elements are to be inserted
	- the remaining arguments represent the elements that will be added or replaced in the array
    
   ```
    let user = ["Ali", "Jane", "Pedro"];

    user.splice(2, 0, "Yui"); // insert at user[2]

    for (let n of user) {
        console.log(n);
    } // Output: Ali, Jane, Yui, Pedro

    let del = user.splice(1, 2); // [1]&[2] delete
    console.log(del + " have been deleted!");
    user.splice(1, 0, "Wiktoria", "John"); // insert 2 elements
    user.splice(0, 1, "Mohammed") // replace user[0] with Mohammed

    for (let n of user) {
        console.log(n);
    } // Output: Mohammed, Wiktoria, John, Pedro
   ```


## Sort arrays
To sort elements in the array there is the `sort()` method. 

   ```
    const months = ['March', 'Jan', 'Feb', 'Dec'];
    months.sort();
    console.log(months);	// Output: ["Dec", "Feb", "Jan", "March"]
   ```

Here a separate function is written that sets the sort criterion. The comparison function is defined with two parameters, which are called internally in pairs for the values of the array when `sort()` is called. With a corresponding return value of *-1, 1, 0* `sort()` takes care that the array is sorted. *-1* if the value is greater than the second value, the opposite happened with *1*. With a return value of *0* both values are equal.

 [Complete Code](https://github.com/BellaMrx/Arrays_functions_objects_in_JS/blob/main/Examples/Part_13/script.js) --> **Examples/Part_13/...**   
   ```
    function compare(val1, val2) {
        if (val1 < val2) {
            return -1; 		// va1 is smaller than val2
        } else if (val1 > val2) {
            return 1; 		// val1 is greater than val2
        } else {
            return 0;	 	// val1 and val2 are equal
        }
    }

    let user = [
        "Jane",
        "Yui",
        "John",
        "Ali",
        "Maya"
    ];

    user.sort(compare);
    for (let n of user) {
	    console.log(n);
    }		// Output: Ali, Jane, John, Maya, Yui
   ```


## Searching in arrays
With `indexOf()` it is possible to search directly in the array for a specific element. The element to be searched is given as argument. It is also possible to use a second argument, from which index the search should be started. If *-1* is returned, then the element is not contained in the array.

 [Complete Code](https://github.com/BellaMrx/Arrays_functions_objects_in_JS/blob/main/Examples/Part_14/script.js) --> **Examples/Part_14/...**   
   ```
    const user = ['Ali', 'Jane', 'Pedro', 'Wiktoria', 'Yui'];

    console.log(user.indexOf('Jane'));      // Output: 1

    // start from index 2
    console.log(user.indexOf('Jane', 2));   // Output: 4

    // element not contained in the array
    console.log(user.indexOf('John'));      // Output: -1
   ```
The `indexOf()` method starts searching at the beginning of the array. With `lastIndexOf()` the search can be started at the end of the array.
The `find()` method returns the value of the element of an array (or `undefined`) that satisfies the condition of a provided test function. The `findIndex()` method returns the index of the first element in the array that satisfies the provided test function, or *-1*.


### More methods for arrays

| Method        | Description                                 |
|-------------- | ------------------------------------------- |
| `concat()`    | appends elements or arrays to another array |
| `copyWithin()`| Copy elements within the array              |
| `filter()`    | Elements can be sorted out from the array according to a certain filter condition  |
| `join()`      | converts an array into a string             |
| `reverse()`   | sorts the elements in the array into the reverse order |
| `splice()`, `toLocaleString()`, `valueOf`    | arrays can be converted into strings |

 [More methods on MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)


# 3. Strings and regular expressions
Strings are usually the most common type of data used. 

### the inner structure of a string
The internal structure of strings is similar to arrays. The first character of a string starts with the index 0.
| H | E | L | L | O |   | W | O | R | L | D |
|---|---|---|---|---|---|---|---|---|---|---|
| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10|


## Useful functions for strings
Web forms often check the length of the input strings in an `input` field. For this purpose there is the `length` property which contains the number of characters of a string.

   ```
    let hello = "Hello world";
    console.log(hello.length);  // Output: 11
   ```

For extracting strings there are two methods `substring()` and `substr()`. Both methods expect as first argument the start index from where the string is to be extracted. If no second argument is given, the string is extracted from the start index to the end. If a second argument is given, for `substring()` it is the index to extract to. For `substr()` the second argument is the number of characters to extract at the start index.

   ```
    let hello = "Hello world";
    let pos1 = hello.indexOf("");

    console.log(hello.substring(pos1 + 1));     // Output: World
    console.log(hello.substr(3, 2));            // Output: lo
    console.log(hello.substring(0 + pos1));     // Output: Hello
   ```


## Apply regular expressions to strings  
Regular expressions are used to describe a pattern of strings in order to formulate a search expression. A regular expression is a formal language that can be used to describe a set of strings.

Regular expressions are objects of type `RegExp` and can be created either as a constructor function `new RegExp()` or as a literal notation.

   ```
    let txt = "In this text is searched";
    let regEx01 = /text/;               // Literal notation
    let regEx02 = new RegExp(/will/);   // Constructor function
    let n01 = txt.search(regEx01);      // Search for "text" in txt
    console.log('"text" found at position ' + n01);
    let n02 = txt.search(regEx02);      // search for "will" in txt
    console.log('"will" found at position ' + n02);
    let newText = txt.replace(regEx01, "paragraph")     // search and replace
    console.log(newText);               // Output: In this paragraph is searched
   ``` 

#### Besides the properties and methods shown here, there are many more options available.


# 4. Object-oriented programming
In simple terms, objects in JavaScript are complex and compound variables with properties and methods. The properties are called attributes or properties and the methods are sometimes called object methods. This information, such as properties and methods, can be accessed with the object.

 [Complete Code](https://github.com/BellaMrx/Arrays_functions_objects_in_JS/blob/main/Examples/Part_15/script.js) --> **Examples/Part_15/...**   
   ```
    let user = {
        nickname: "Phoenix420",         // nickname
        alter: 24,                      // age
        admin: false,                   // admin privileges
        print: function() {
            console.log("Nickname : " + this.nickname);
            console.log("Alter    : " + this.alter);
            console.log("Admin    : " + this.isAdmin());
        },
        isAdmin: function() {
            return this.admin ? "Yes" : "No";
        }
    };
    user.print();
   ```

This is one of several ways to create an object. Objects are realized using key-value pairs. Key and value are separated by a colon `:`. The key is used to access the corresponding values. A value itself can be a literal, function or method of the object.
Everything after the assignment to `let user` between the curly braces is the content of the object. Here there are three properties `nickmane`, `age` and `admin` and two methods with `print` and `isAdmin`. Methods are introduced with the keyword `function`. Since ES6 the keyword can be omitted. The individual properties and methods of the object must be separated with commas `,`. The value of a property or method is noted behind a colon `:`.


## Create objects via constructor functions
With a constructor function and the keyword `new` a new object is defined and created. With this constructor function any number of copies of the object can be created. A constructor function does not differ in appearance from a normal function, therefore it is recommended to capitalize the first letter.

 [Complete Code](https://github.com/BellaMrx/Arrays_functions_objects_in_JS/blob/main/Examples/Part_16/script.js) --> **Examples/Part_16/...**   
   ```
    function User(nickname, age, admin) {
        this.nickname = nickname;
        this.age = age;
        this.admin = admin;
        this.printUser = function() {
            console.log("Nickname : " + this.nickname);
            console.log("Age      : " + this.age);
            console.log("Admin    : " + this.isAdmin());
        }
        this.isAdmin = function() {
            return this.admin ? "Yes" : "No";
        }
    };

    let user01 = new User("Phoenix420", 24, false);
    let user02 = new User("Ced_Lord", 11, true);
    user01.printUser();
    user02.printUser();
   ```
By calling the keyword `new` the function becomes a constructor function, thereupon the function creates an object and returns it. A `return` is not needed, because the new object is returned implicitly. The property and methods within the constructor function are accessed via the keyword `this`.


## Create objects with the class syntax
The keyword `class` was introduced to be able to define a class with it and the keyword `function` is no longer needed for the method.

 [Complete Code](https://github.com/BellaMrx/Arrays_functions_objects_in_JS/blob/main/Examples/Part_17/script.js) --> **Examples/Part_17/...**   
   ```
    class User {
        constructor(nickname, age, admin) {
            this.nickname = nickname;
            this.age = age;
            this.admin = admin;
        }
        print() {
            console.log("Nickname : " + this.nickname);
            console.log("Age      : " + this.age);
            console.log("Admin    : " + this.isAdmin());
        }
        isAdmin() {
            return this.admin ? "Yes" : "No";
        }
    };

    let user01 = new User("Phoenix420", 24, false);
    let user02 = new User("Ced_Lord", 11, true);
    user01.print();
    user02.print();
   ```
The `constructor()` method is called implicitly when a new object instance of the corresponding class is created. The `constructor() ` method corresponds in principle to that of the constructor function. Here, too, no `return` is required because the object instance is returned implicitly.   


## Access to the object properties and methods: setter and getter
For access to object properties and methods one usually uses the dot notation:

   ```
   ...
    let user01 = new User("Phoenix420", 24, false);
    // dot notation:
    user01.print();
    console.log(user01.nickame);    // Output: Phoenix420
   ```

Another way is to put the properties and methods in square brackets `[]` between single `''` or double `""` quotes:

   ```
   ...
    let user01 = new User("Phoenix420", 24, false);     
    // bracket notation:
    user01.["print"]();
    console.log(user01["nickame"]);    // Output: Phoenix420
   ```

Which notation is used, everyone must decide for himself, but it should be uniform. But there are individual cases in which only the bracket notation can be used. That is if properties or methods contain e.g. a hyphen. Without the square bracket otherwise an error could occur, because the hyphen is interpreted as a minus sign.

In this way, the properties of an object can now be changed directly:

   ```
   ...
    user01.nickname = "Granny";
    user01.age = 67;
    user01.admin = "root";
   ```

Here you can see that it is now also possible to enter some nonsense.

In object-oriented programming, so-called setter methods are usually used to change individual properties, and getter methods are used to retrieve individual properties. With setter methods, it is also possible to check the validity of the value passed.

JavaScript provides the keywords `set` and `get` for such method:

 [Complete Code](https://github.com/BellaMrx/Arrays_functions_objects_in_JS/blob/main/Examples/Part_18/script.js) --> **Examples/Part_18/...**   
   ```
    class User {
        constructor(nickname, age, admin) {
            this._nickname = nickname;
            this._age = age;
            this._admin = admin;
        }
        isAdmin() {
            return this._admin ? "Yes" : "No";
        }
        set nickname(name) {
            if (typeof name === "string") {
                this._nickname = name;
            } else {
                console.log("Error: No string!")
            }
        }
        get nickname() {
            return this._nickname;
        }
        set age(old) {
            if (typeof old === "number") {
                this.age = old;
            } else {
                console.log("Error: No integer!")
            }
        }
        get age() {
            return this._age;
        }
        set admin(adm) {
            if (typeof adm === "boolean") {
                this._admin = adm;
            } else {
                console.log("Error: true or false!")
            }
        }
        get admin() {
            return this._admin;
        }
    };

    let user01 = new User("Phoenix420", 24, false);
    // Setter methods in use
    user01.nickname = "Granny";     // set nickname("Granny")
    user01.alter = 67;              // set age(67)
    user01.admin = true;            // set admin(true)
    // Getter methods in use
    console.log(user01.nickname);   // get nickname()
    console.log(user01.alter);      // get age()
    console.log(user01.admin);      // get admin();
   ```
To avoid naming conflicts between properties and methods, it is common to start the properties with an underscore (`_age`). 


## The keyword `this`
In simple terms, `this` is a kind of property which, when called, is assigned the value of the object with which it is called; it is, so to speak, a reference to itself. `this` is an implicit parameter that is automatically available.

 [Complete Code](https://github.com/BellaMrx/Arrays_functions_objects_in_JS/blob/main/Examples/Part_19/script.js) --> **Examples/Part_19/...**   
   ```
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
   ```

Here `this` is notated in a class, a global function and the global environment. Within the class, `this` refers to the instantiated object `SimpleClass` itself. For the global function, the execution context is `undefined` in strict mode. Without the strict mode, it would be the `window` object when the JS is executed in the web browser. When using `this` globally, on the other hand, the global `window` object is used by default.

`this` is a reference to the owner of the object. And this is necessary because there can be and are more instances of an object. Within methods of a created object, this is important because it ensures that if there are multiple instances of the same object, the stored properties of the individual instances can be accessed. After all, each instance of an object has its own properties and does not share them with another instance.


# 5. More global objects
Predefined objects are the native objects, these provided ready objects include: **Array, Boolean, Date, Function, Map, Set, Math, Number, RegExp, String** and **Object**.

## **Object**
All other objects derive from this object. Each object is of the type `Object` and can belong beyond that in more specific types (e.g. **String**). The `Object` object provides properties and methods, it is in principle only a container for data like strings or numbers, or also function objects.

   ```
    let data = new Object();
    data.name = "Jane Doe";
    data.residence = "New York";
    data.accountNr = 123456789;
   ```
or

   ```
    let data = {
        name: "Jane Doe",
        residence: "New York",
        accountNr: 123456789
    }   
   ```

## **Number**, **String**, **Boolean** (primitive data types)
primitive version:

   ```
    let iVal = 2468;
    console.log(typeof iVal);      // Output: number
    let str = "text";
    console.log(typeof str);       // Output: string
    let bool = false;
    console.log(typeof bool);      // Output: boolean
   ```
Object version:

   ```
    let iOVal = new Number(2468);
    console.log(typeof iOVal);      // Output: object
    let oStr = new String("text");
    console.log(typeof oStr);       // Output: object
    let oBool = new Boolean(false);
    console.log(typeof oBool);      // Output: object  
   ```

However, in practice it is recommended not to use the object version, but the primitive form. Because the object version only makes the code more complicated and can speed up the script.

It becomes more complicated when a variable with the primitive data type and an object version are compared:

 [Complete Code](https://github.com/BellaMrx/Arrays_functions_objects_in_JS/blob/main/Examples/Part_20/script.js) --> **Examples/Part_20/...**   
   ```
    let iVal = 2468;
    let iOVal = new Number(2468);

    if (iVal == iOVal) {
        console.log("The value of iVal is equal to iOVal.");
    } else {
        console.log("The value of iVal is not equal to iOVal.");
    }

    if (iVal === iOVal) {
        console.log("The value and type of iVal is equal to iOVal.");
    } else {
        console.log("The value and type of iVal is not equal to iOVal.");
    }
   ```
When comparing with the `==` operator `true` is returned because an automatic conversion is done. When comparing with `==` `false` is returned, the values are the same but not the type.


## **Date** object
The **Date** object provides an extensive set of methods for different calculations of date and time. To use the **Date** object, a new object is created with the `newDate()` constructor function.

   ```
    let date = new Date();
    console.log(date);              // current date
    console.log(Date.parse(date));  // since 1.1.1970, 0:00
   ```


## **Math** object
For different types of calculations there is the **Math** object with useful properties and methods. The properties and methods can be created directly via `Math.property()` and `Math.method()` respectively.

   ```
    console.log("Konstante für PI : " + Math.PI);   // 3.141592653589793

    let r = 12;
    let a = r * r * Math.PI;    // circle area calculation
    console.log(a);

    console.log(Math.random());     // generate random number between 0 and 1
   ```

## **Map** object
With **Map** an ordered list of key-value pairs can be created. Here the keys and the values can consist of any data type.

   ```
    let postcode = new Map([
        [86150, "Augsburg"],
        [80331, "Munich"],
        [10117, "Berlin"],
        [50667, "Cologne"]
    ]);

    let postcodeTmp = postcode.get(80331);
    console.log(postcodeTmp); // Output: Munich
    // add key-value pair
    postcode.set(60306, "Frankfurt");
   ```


## **Set** object
A **Set** object is a collection of values of any type, stored in the order in which they are added. Each value is unique in a **Set**. An algorithm internally checks for equality before adding. Single elements can be added with `add()`. With `has()` it can be checked if an element already exists in the **set**. The number of elements can be determined with `size()`.

   ```
    let mySet = new Set([1, 3, 5]);
    mySet.add(7); // added at the back
    mySet.add(3); // will not be added, already present
    mySet.add("some text"); // added at the back

    // check
    console.log(mySet.has(5)); // = true
    console.log(mySet.has(9)); // = false
    console.log(mySet.size); // = 5

    // iterate through a set and output
    for (let item of mySet) console.log(item);

    // delete element
    mySet.delete(3);
    mySet.delete("some text");
   ```

---------------------------------------------------------------------

## The end
This is only an introduction to JavaScript functions, arrays and objects, there is still far more to know about them. But these are already one of the most important topics everyone should know. 

If you don't know HTML, CSS or JavaScript yet, have a look here:
  - [WebDevelopment Basics](https://github.com/BellaMrx/WebDevelopment_Basics) - Basics Guide for web developers
  - [HTML Guide](https://github.com/BellaMrx/HTML_Guide) - Detailed guide about HTML5 (all basics for HTML)
  - [HTML Cheat Sheets](https://github.com/BellaMrx/HTML_Cheat_Sheets) - All HTML5 elements and their attributes
  - [CSS Guide](https://github.com/BellaMrx/CSS_Guide) - Detailed guide about CSS (Introduction to CSS, CSS Selectors, Inheritance and the cascade, CSS Box Model, CSS Positioning, Flexbox, Responsive Web Design, CSS Grid Layout, Styling with CSS, Testing and Organizing) 
  - [Sass and SCSS Basic Guide](https://github.com/BellaMrx/Sass_and_SCSS) - An introduction to the CSS preprocessor Sass

  **JavaScript Basics:**

  1. [JS Introduction](https://github.com/BellaMrx/JS_introduction) - An introduction to JavaScript
  2. You are here --> [Arrays, functions, objects in JS](https://github.com/BellaMrx/Arrays_functions_objects_in_JS) - Introduction: Arrays, functions and objects in JavaScript     
  3. [DOM - Document Object Model](https://github.com/BellaMrx/DOM_Document-Object-Model) -  Introduction to the **DOM** and the **DOM** manipulation - Change web pages dynamically      

Or just visit my GitHub profile, you can find all guides/tutorials there [BellaMrx](https://github.com/BellaMrx)

Thanks for the attention.

#### This is the end, beautiful friend... ;)







