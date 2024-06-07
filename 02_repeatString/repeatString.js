const repeatString = function(text, repeats) {
    if(repeats<0) return 'ERROR';
    let finalText = '';
    for(let r = 0; r < repeats; r++) {
        finalText += text;
    }
    return finalText;
};

// Do not edit below this line
module.exports = repeatString;
