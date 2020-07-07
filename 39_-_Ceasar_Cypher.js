
function cypher(letter, n) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    return alphabet[alphabet.indexOf(letter) + n]
}

function main(str, n) {
    const strArray = str.split("");
    const map1 = strArray.map(x => cypher(x, n));

    return map1;
}

console.log(main("abc", 3))