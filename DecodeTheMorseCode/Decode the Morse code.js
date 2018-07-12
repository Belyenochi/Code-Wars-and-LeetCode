/*
    part1
 */
decodeMorse = function(morseCode){
    //your code here
    let token = [], morseCodeStr;
    morseCodeStr = morseCode.trim();
    skipSpace(morseCodeStr, token);
    for (let i = 0; i < token.length; i ++) {
        if (token[i] !== ' ') {
            token[i] = MORSE_CODE[token[i]]; // MORSE_CODE is a dictionary
        }
    }

    return token.join("");
}

function skipSpace(morseCodeStr, token) {
    let match;
    if (morseCodeStr.length === 0) {
        return;
    }

    if (match = /^\S+/.exec(morseCodeStr)) {
        token.push(match[0]);
        return skipSpace(morseCodeStr.slice(match[0].length), token);
    } else if (match = /^\s\s\s/.exec(morseCodeStr)) {
        token.push(' ');
        return skipSpace(morseCodeStr.slice(3), token);
    } else {
        return skipSpace(morseCodeStr.slice(1), token);
    }
}