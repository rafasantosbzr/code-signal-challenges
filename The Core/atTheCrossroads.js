//reach next level
function solution(experience, threshold, reward) {
    if (experience >= threshold || experience + reward >= threshold) return true;
    else return false;
}

//knapsack light
function solution(value1, weight1, value2, weight2, maxW) {
    const bag = [weight1, weight2];
    const value = [value1, value2];
    let maxV = 0;
    
    if (value2 > value1) {
        if (bag[1] <= maxW) {
        maxV += value[1];
        maxW -= bag[1];
        }
    
        if (bag[0] <= maxW) {
        maxV += value[0];
        maxW -= bag[0];
        }
    } else {
        if (bag[0] <= maxW) {
        maxV += value[0];
        maxW -= bag[0];
        }
    
        if (bag[1] <= maxW) {
        maxV += value[1];
        maxW -= bag[1];
        }
    }   
    return maxV;
}