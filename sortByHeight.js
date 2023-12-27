// https://app.codesignal.com/arcade/intro/level-3/D6qmdBL2NYz49XHwM

function solution(a) {
    
    const treeIndexes = [];
    const peoplesHeights = [];
    const orderedRow = [];
    
    for (let i = 0; i < a.length; i++) { 
        if (a[i] === -1) {
            treeIndexes.push(i);
        } else {
            peoplesHeights.push(a[i]);
        }
    }
    peoplesHeights.sort((a, b) => a - b);   
    
    for (let j = 0; j < a.length; j++) {
        if (treeIndexes.includes(j))  {
            orderedRow.push(-1);
        } else {
            orderedRow.push(peoplesHeights[0]);
            peoplesHeights.shift();
        }
    }
    return orderedRow;
}