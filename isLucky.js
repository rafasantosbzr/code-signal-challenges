// https://app.codesignal.com/arcade/intro/level-3/3AdBC97QNuhF6RwsQ

function solution(n) {
    const stringN = n.toString();
    const arrayN = stringN.split('');
    
    const division = arrayN.length / 2
    let sumFirstHalf = 0;
    let sumSecondHalf = 0;
    
    for (let i = 0; i < division; i++) {
        sumFirstHalf += Number(arrayN[i]);
    }
    
    for (let j = arrayN.length - 1; j >= division; j--) {
        sumSecondHalf += Number(arrayN[j]);
    }
    
    return sumFirstHalf === sumSecondHalf;
}