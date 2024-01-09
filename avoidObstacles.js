//https://app.codesignal.com/arcade/intro/level-5/XC9Q2DhRRKQrfLhb5

function solution(inputArray) {
    let jumpLength = 2;
    while (inputArray.some(element => element % jumpLength === 0)) {
        jumpLength++
    }
    return jumpLength;
}