const sumAll = function(first, second) {
    // make sure both are integers and positive
    if(!Number.isInteger(first) || 
        !Number.isInteger(second) || 
        first < 0 || 
        second < 0) {
        return 'ERROR';
    }
    
    // consider may be integers are not in order
    const inOrder = first <= second;
    let start = inOrder ? first : second;
    let end = inOrder ? second : first;
    
    // do summition
    let sum = 0;
    for(let n = start; n <= end; n++) {
        sum += n;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
