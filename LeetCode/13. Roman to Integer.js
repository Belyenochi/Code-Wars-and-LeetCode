/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let sum = 0;
    romanHashReverse = {
        'M':1000,
        'Z':900,
        'D':500,
        'A':400,
        'C':100,
        'B':90,
        'L':50,
        "N":40,
        'X':10,
        "U":9,
        'V':5,
        'P':4,
        'I':1
    }
    s = s.replace(/CM/, "Z").replace(/CD/, "A").replace(/XC/, "B").replace(/XL/, "N").replace(/IX/, "U").replace(/IV/, "P");

    for(let i = 0; i < s.length ; i ++) {
        sum += romanHashReverse[s[i]];
    }

    return sum;
};
