
function cypher(letter, n) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    return alphabet[alphabet.indexOf(letter.toLowerCase()) + n]
}

function main(str, n) {
    const strArray = str.split("");
    const map1 = strArray.map(x => cypher(x, n));
    let newString = "";
    const stringMap = map1.map(letter => newString += letter)


    return newString;
}

console.log(main("ABc", 3))