function digitCalc(n){
    let digitArray = n.toString().split("");
    let sum = 0;
    for (digit of digitArray) {sum += parseInt(digit)};
    return sum;
};

console.log(digitCalc(155))