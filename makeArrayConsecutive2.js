// https://app.codesignal.com/arcade/intro/level-2/bq2XnSr5kbHqpHGJC

function solution(statues) {
    return Math.max(...statues) - Math.min(...statues) - statues.length + 1;
}