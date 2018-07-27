let input = [41,467,334,500,169,724,478,358,962,464,
    705,145,281,827,961,491,995,942,827,436];

class BST {
    constructor(weight, lChild, rChild) {
        this.weight = weight;
        this.lChild = lChild;
        this.rChild = rChild;
    }
}

let root = new BST(input.pop(), '', '');
function setBST(input) {
    let currentVal = input.pop(), insertLocation;

    // console.log(currentVal);
    if (input.length === 0) {
        return;
    }
    findLocation(currentVal, root);
    return setBST(input);
}

function findLocation(currentVal, root) {
    if (currentVal < root.weight) {
        if (!root.lChild) {
            root.lChild = new BST(currentVal, '', '');
        }
        else {
            return findLocation(currentVal, root.lChild);
        }
    } else {
        if (!root.rChild) {
            root.rChild = new BST(currentVal, '', '');
        }
        else {
            return findLocation(currentVal, root.rChild);
        }
    }
}
setBST(input);
// console.log(root);

function preOrder(BST) {
    console.log(BST.weight);
    if (BST.lChild) {
        preOrder(BST.lChild);
    }
    if (BST.rChild) {
        preOrder(BST.rChild);
    }
}

preOrder(root);
