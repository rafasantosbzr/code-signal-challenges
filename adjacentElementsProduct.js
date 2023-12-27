// https://app.codesignal.com/arcade/intro/level-2/xzKiBHjhoinnpdh6m

function solution(inputArray) {
    let product = -1000;
    
    for (let i = 0; i < inputArray.length; i++)  {
        if (inputArray[i] * inputArray[i+1] > product) {
            product = inputArray[i] * inputArray[i+1];
        }
    }
    console.log(product);
    return product;
}