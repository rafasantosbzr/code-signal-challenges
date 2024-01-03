//https://app.codesignal.com/arcade/intro/level-4/ZCD7NQnED724bJtjN

function solution(picture) {
    const asterisk = "*";
    
    for (let i = 0; i < picture.length; i++) {
        picture[i] = asterisk + picture[i] + asterisk;
    }
    
    let newString = picture[0].replace(/./g, "*");
    picture.unshift(newString);
    picture.push(newString);
    
    return picture;
}