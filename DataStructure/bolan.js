var preExp = ['+','+','+','1','2','2','2']
class Tree {
    constructor(lNode,rNode,value) {
        this.lNode = lNode;
        this.rNode = rNode;
        this.value = value;
    }
}

function buildPreTree(preExp) {
    let current = preExp.shift();

    console.log(current, preExp);
    if (!current.match(/[+|-|*|/]/i)) {
        return current;
    }
    return new Tree(buildPreTree(preExp), buildPreTree(preExp), current);
}

function preReverse(tree, result) {

    if (tree.constructor === Tree) {
        result.push(tree.value);
        preReverse(tree.lNode, result);
        preReverse(tree.rNode, result);
    } else {
        result.push(tree);
    }

    console.log(result);
}

function evalbolan(preExp) {
    let current = preExp.reverse(),currentStack= [],num1,num2;

    current.forEach((item)=>{
        if (!item.match(/[+|-|*|/]/i)) {
            currentStack.push(item);
        } else {
            num1 = currentStack.pop();
            num2 = currentStack.pop();
            result = eval(`${num1}${item}${num2}`);
            currentStack.push(result);
        }
    })

    console.log(currentStack);
}

var tree = buildPreTree(preExp);
console.log("====================================");
console.log(tree);

console.log("====================================");
var result = [];
preReverse(tree, result);
console.log("====================================");
evalbolan(result);