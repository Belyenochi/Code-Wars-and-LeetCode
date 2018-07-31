var calc = function (expression) {
    // evaluate `expression` and return result
    let progStack = [], env = {};

    env["+"] = function (a, b) {return parseInt(a) + parseInt(b);}
    env["-"] = function (a, b) {return parseInt(a) - parseInt(b);}
    env["*"] = function (a, b) {return parseInt(a) * parseInt(b);}
    env["/"] = function (a, b) {return parseInt(a) / parseInt(b);}

    console.log(evalExp(expression, progStack, env));
};

function evalExp(program, progStack, env) {
    let match, match2;

    while (program.length !== 0 ) {
        program = skipSpace(program);

        if (match = /^[-]?[0-9]+/.exec(program)) {
            if (/^[+|-|*|\/]/.exec(progStack[progStack.length - 1])) {
                if (match2 = /^([*|\/])\s*([0-9]+)/.exec(skipSpace(program.slice(match[0].length)))) {
                    progStack.push(
                        env[progStack.pop()](progStack.pop(), env[match2[1]](match[0], match2[2]))
                    );
                }
                else {
                    progStack.push(
                        env[progStack.pop()](match[0], progStack.pop()));
                }
            }
            else {
                progStack.push(match[0])
            }
        } else if (match = /^[+|\-|*|\/]/.exec(program)) {
            progStack.push(match[0]);
        } else if (match = /^[\)|\(]/.exec(program)) {
        }
        else {
            return "Invalid";
        }

        program = match2 ? program.slice(match[0].length + match2[0].length) : program.slice(match[0].length);
    }

    return progStack.pop();
}

function skipSpace(string) {
    var first = string.search(/[\S|\u0000]/);
    if (first == -1) return "";
    return string.slice(first);
}

calc("12* 123/-(-5 + 2)");