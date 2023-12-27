//https://app.codesignal.com/arcade/intro/level-2/yuGuHvcCaFCKk56rJ

function solution(n) {
    if (n === 1) {
    return 1;
    }

  const previousArea = solution(n-1);
  const newArea = previousArea + 4*(n-1);

  return newArea;
}