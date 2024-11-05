const removeFromArray = function(array,...args) {
    const result = [];
    let i = 0;
    array.forEach((item) => {
        if(!args.includes(item)){
            result.push(item);
        }
    });
    return result;
};//1,2,3,4 ,, 3,4

// Do not edit below this line
module.exports = removeFromArray;