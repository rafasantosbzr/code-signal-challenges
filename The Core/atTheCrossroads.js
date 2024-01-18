//reach next level
function solution(experience, threshold, reward) {
    if (experience >= threshold || experience + reward >= threshold) return true;
    else return false;
}

//knapsack light