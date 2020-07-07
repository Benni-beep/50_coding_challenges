/**
 *  19. Create a function that will return in an array the first “p” prime numbers
 *  greater than “n”
 */

function primeCheck(n) {
    if (n < 2) { return false }
    for (let i = 0; i < n - 2; i++) {
        if (n % (i + 2) === 0)
            return false;
    }
    return true;
}

function primeNumberList(p, n) {
    let array = [];
    for (let i = n + 1; array.length < p; i++) {
        if (primeCheck(i)) { array.push(i) }
    }
    return array;
}

console.log(primeNumberList(3, 5))