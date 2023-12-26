// https://app.codesignal.com/arcade/intro/level-3/JKKuHJknZNj4YGL32

function solution(s1, s2) {
    let sum = 0;
    
    const arrS1 = s1.split('');
    const arrS2 = s2.split(''); 
    
    for (let i = 0; i < arrS1.length; i++) {
        for (let j = 0; j < arrS2.length; j++) {
            if (arrS1[i] === arrS2[j]) {
                sum++
                arrS1.splice(i, 1);
                arrS2.splice(j, 1);
                i = 0
                j =- 1
            }
        }
    }
    return sum;   
}