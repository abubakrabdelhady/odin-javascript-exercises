const removeFromArray = function(arr, ...remove) {
    return arr.filter((element) => !remove.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
