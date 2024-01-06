// https://app.codesignal.com/arcade/intro/level-4/Xfeo7r9SBSpo3Wico
function solution(inputString) {
    const sortedString = inputString.split('').sort().join('');
    const uniqueString = sortedString.replace(/(\w)\1/g,''); 
    //removes duplicates, in a two-by-two basis 
    //until the string's length is either 0 or 1 (only one unique character)
    
    return uniqueString.length < 2;
}