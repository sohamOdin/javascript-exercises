const repeatString = function(text,number) {
    if(number < 0) return "ERROR";
    let result = "";
    for(let i = 0;i<number;i++){
        result += text;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
