// https://app.codesignal.com/arcade/intro/level-3/9DgaPsE2a7M6M2Hu6

function solution(inputString) {
    while (inputString.includes('(')) {
        inputString = inputString.replace(/\(([^()]*)\)/, (_, str) => [...str].reverse().join(''));
    }
    return inputString;
}