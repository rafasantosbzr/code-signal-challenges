// https://app.codesignal.com/arcade/intro/level-3/fzsCQGYbxaEcTr2bL

function solution(inputArray) {
    let longestStringSize = 0;
    let newArray = [];
    
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length >= longestStringSize) {
            longestStringSize = inputArray[i].length;
        }
    }
    
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length === longestStringSize) {
            newArray.push(inputArray[i]);
        }
    }
    
    return newArray;
}