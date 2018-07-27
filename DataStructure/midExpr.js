class midExpr {
    constructor(value,type,lChild,rChild) {
        this.value = value;
        this.type = type;
        this.lChild = lChild;
        this.rChild = rChild;
    }
}

let input = "a+b*c";
let table = {
    'a':3,
    'b':4,
    'c':5
};
let operand = [];
let operator = [];


function lexer(exprStr) {
    let current,match;
    exprStr = exprStr.trim();

    if (!exprStr.length) {
        return;
    } else {
        // console.log(exprStr);
        current = exprStr[0];
        if (match = /[a-zA-Z]/.exec(current)) {
            operand.push(match[0]);
        } else if (match = /[+|\-|\*|\/]/.exec(current)) {
            operator.push(match[0]);
        }
        return lexer(exprStr.slice(1));
    }
}

function buildAST(operator, operand){

    if (operand.length === 1) {
      return new midExpr(operand.shift(), 'operand', '', '');
    }
    return new midExpr(operator.shift(), 'operator',
        new midExpr(operand.shift(),'operand' ,'', ''), buildAST(operator, operand));

}

function evalExpr(midExpr) {
    checkVaild(midExpr);
    if (midExpr.type === 'operand') {
        return table[midExpr.value];
    }

    return eval(`${evalExpr(midExpr.lChild)} ${midExpr.value} ${evalExpr(midExpr.rChild)}`);
}

function checkVaild(midExpr) {
    if (midExpr.weight === '\\' &&midExpr.rChild.weight === '0') {
        throw SyntaxError("divisor can't be zero!");
    }
}

lexer(input);
console.log(evalExpr(buildAST(operator, operand))); // 23

