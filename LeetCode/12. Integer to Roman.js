
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let numerals = [{num: 'I',value: 1},{num: 'V',value: 5}, {num: 'X',value: 10},
        {num: 'L',value: 50},{num: 'C',value: 100},{num: 'D',value: 500},{num: 'M',value: 1000}],result = [],current,counter = 0;
    while (numerals.length && num) {
        if (parseInt(num / 900) === 1 && num < 1000) {
            assistPush(result, 1, 'CM');
            num = num % 900;
        } else if (parseInt(num / 400) === 1 && num < 500) {
            assistPush(result, 1, 'CD');
            num = num % 400;
        } else if (parseInt(num / 90) === 1 && num < 100) {
            assistPush(result, 1, 'XC');
            num = num % 90;
        } else if (parseInt(num / 40) === 1 && num < 50) {
            assistPush(result, 1, 'XL');
            num = num % 40;
        } else if (parseInt(num / 9) === 1 && num < 10) {
            assistPush(result, 1, 'IX');
            num = num % 9;
        } else if (parseInt(num / 4) === 1 && num < 5) {
            assistPush(result, 1, 'IV');
            num = num % 4;
        } else {
            current = numerals.pop();
            counter = parseInt((num / current.value));
            console.log(num, counter);
            assistPush(result, counter, current.num);
            num = num % current.value;
        }
    }

    return result.join("");
};

function assistPush(arr,counter,numeral) {
    for (let i = 0; i < counter; i ++) {
        arr.push(numeral);
    }
}
/*  better solution
var intToRoman = function(num) {
    romanHashReverse = {
        'M':1000,
        'CM':900,
        'D':500,
        'CD':400,
        'C':100,
        'XC':90,
        'L':50,
        "XL":40,
        'X':10,
        "IX":9,
        'V':5,
        'IV':4,
        'I':1
    }
    var roman = ''
    for(var key in romanHashReverse ){

        while(num >= romanHashReverse[key]){
            roman += key
            num -= romanHashReverse[key]
        }
    }

    return roman

};
 */