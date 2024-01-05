// https://app.codesignal.com/arcade/intro/level-4/xvkRbxYkdHdHNCKjg

function solution(inputArray) {
    let sum = 0;
    
    while (!inputArray.every((current, index, array) => index === 0 || current > array[index - 1])) {
        for (let i = 0; i < inputArray.length - 1; i++) {
            if (inputArray[i + 1] <= inputArray[i]) {
                inputArray[i + 1] += 1;
                sum++;
            }
        }
    }    
    return sum;
}