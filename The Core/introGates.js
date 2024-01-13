//add two digits
function solution(n) {
    let arr = n.toString().split("");
    let sum = 0;
    
    for (const digit of arr) {
        sum += Number(digit);
    }
    return sum;
}

//largest number
function solution(n) {  
    const largestNumber = [];
    let str = "";
    
    for (let i = 1; i <= n; i++) {
        largestNumber.push(9);
    }
    
    for (const i of largestNumber) {
        str += i;
    }
    return Number(str);
}

//candies
function solution(n, m) {
    return Math.floor(m / n) * n;
}

//seats in theater
function solution(nCols, nRows, col, row) {
    return (nRows - row) * (nCols - col + 1);
}

//max multiple
function solution(divisor, bound) {
    let largestInteger = 1;
    for (let i = 1; i <= bound; i++) {
        if (i % divisor === 0) {
            largestInteger = i;
        }
    }
    return largestInteger;
}

//circle of numbers