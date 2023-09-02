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
