const sumAll = function(num1,num2) {
    if(Number.isInteger(num1)===false || num1<=0 || Number.isInteger(num2) ===false || num2<=0 ){
        return "ERROR";
    }
    let sum = 0;
    let min,max;
    if(num1 < num2){
        min = num1;
        max = num2;
    }
    else{
        min = num2;
        max = num1;
    }
    for(i = min;i<=max;i++){
        sum+=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;