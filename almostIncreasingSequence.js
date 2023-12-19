//https://app.codesignal.com/arcade/intro/level-2/2mxbGwLzvkTCKAJMG

function solution(sequence) {
    let sum = 0;

    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] >= sequence[i + 1]) {
            if (sum > 1) {
                break;
            }
        if (sequence[i + 1] <= sequence[i - 1] === true) {
            sequence.splice(i + 1, 1);
        } else {
            sequence.splice(i, 1);
        }
            sum++;
            i = -1;
        }
    }

    if (sum < 2) {
        return true;
    } else {
        return false;
    }
}