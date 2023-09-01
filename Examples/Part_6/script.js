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