// https://app.codesignal.com/arcade/intro/level-5/veW5xJednTy4qcjso/solutions

function solution(inputString) {
    const arr = inputString.split(".");
    const newArr = [];
    
    if (arr.length === 4) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].length >= 2 && arr[i] > 9) {
                newArr.push(arr[i]);
            } else if (arr[i].length === 1 && arr[i] > -1) {
                newArr.push(arr[i]);
            }
        }
    }
    
    if (newArr.length === 4) {
        return arr.every((element) => element >= 0 && element <= 255);
    } else {
        return false;
    }
}