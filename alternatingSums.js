// https://app.codesignal.com/arcade/intro/level-4/cC5QuL9fqvZjXJsW9

function solution(a) {
    let sum1 = 0;
    let sum2 = 0;
    
    for (let i = 0; i < a.length; i++) {
        if (i % 2 === 0) {
            sum1 += a[i];
        } else if (i % 2 !== 0) {
            sum2 += a[i];
        }
    }
    const arr = [sum1, sum2];
    return arr;
}