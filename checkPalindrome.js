// https://app.codesignal.com/arcade/intro/level-1/s5PbmwxfECC52PWyQ

function solution(inputString) {
    let answer = true;

    if (inputString.split("").reverse().join("") !== inputString) {
        answer = false;
    };
    
    return answer;
}