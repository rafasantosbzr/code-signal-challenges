// https://app.codesignal.com/arcade/intro/level-4/xYXfzQmnhBvEKJwXP

function solution(a, b) {
    // Check if arrays are equal
    if (arraysAreEqual(a, b)) {
        return true;
    }

    // Find differing indices
    const differingIndices = findDifferingIndices(a, b);

    // If there are more than two differences, return false
    if (differingIndices.length !== 2) {
        return false;
    }

    // Check if swapping elements at differing indices makes arrays equal
    return a[differingIndices[0]] === b[differingIndices[1]] && a[differingIndices[1]] === b[differingIndices[0]];
}

function arraysAreEqual(arr1, arr2) {
    // Check if arrays are equal
    return arr1.every((element, index) => element === arr2[index]);
}

function findDifferingIndices(arr1, arr2) {
    // Find differing indices
    const differingIndices = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            differingIndices.push(i);
        }
    }
    return differingIndices;
}