function sumAll(iVal, ...myargs) {
    var sum = iVal;
    myargs.forEach(function(val) {
        sum += val;
    });
    return sum;
}
console.log(sumAll(100, 200, 300, 400));    // Output: 1000