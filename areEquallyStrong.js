// https://app.codesignal.com/arcade/intro/level-5/g6dc9KJyxmFjB98dL

function solution (yourLeft, yourRight, friendsLeft, friendsRight) {
    const myStats = [yourLeft, yourRight].sort();
    const theirStats = [friendsLeft, friendsRight].sort();
    
    return myStats.every((element, index) => element === theirStats[index]);
}