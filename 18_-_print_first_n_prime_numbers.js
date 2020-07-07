function primeCheck(n) {
    if (n < 2) {return false}
    for (let i = 0; i < n - 2; i++) {
        if (n % (i + 2) === 0)
            return false;
    }
    return true;
}

function primeNumberList(n) {
    let array = [];
    for (let i = 0; array.length < n; i++) {
        if (primeCheck(i)) { array.push(i) }
    }
    return array;
}

console.log(primeNumberList(100))