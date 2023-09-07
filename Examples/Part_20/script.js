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