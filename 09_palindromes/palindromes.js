const palindromes = function (str) {
    const newStr = str.toLowerCase().replace(/[^a-z0-9]/g,'');
    const reverse = newStr.split('').reverse().join('');
    return reverse === newStr;
};

// Do not edit below this line
module.exports = palindromes;