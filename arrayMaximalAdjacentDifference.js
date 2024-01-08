// https://app.codesignal.com/arcade/intro/level-5/EEJxjQ7oo7C5wAGjE

function solution(inputArray) {
    let max = Math.abs(inputArray[0]-inputArray[1]);
    
    for (let i=1; i<inputArray.length-1; i++) {
        if (Math.abs(inputArray[i]-inputArray[i+1])>max) {
            max = Math.abs(inputArray[i]-inputArray[i+1]);
        }
    }
    return max;
}