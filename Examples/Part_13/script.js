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