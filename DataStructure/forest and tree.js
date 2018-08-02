// Parental representation of the tree
class PTNode {
    constructor(value, parent) {
        this.value = value;
        this.parent = parent;
    }

}

class PTree {
    constructor(root,size) {
        this.nodes = [];
        this.root = root;
        this.size = size;
    }
}

// Binary list representation
class CSTree {
    constructor(value, firstNode, nextSlibing) {
        this.value = value;
        this.firstNode = firstNode; // son node
        this.nextSlibing = nextSlibing; // brother node
    }
}

// Binary Tree
class BinaryTree {
    constructor(value, lChild, rChild) {
        this.value = value;
        this.lChild = lChild;
        this.rChild = rChild;
    }
}

var myTree = new PTree(0, 10);
myTree.nodes = [new PTNode('R',-1),new PTNode('A',0),new PTNode('B',0),new PTNode('C',0),
                new PTNode('D',1),new PTNode('E', 1),new PTNode('F', 3),new PTNode('G', 6),
                new PTNode('H',6),new PTNode('K',6)];

function translate2CSTree(Tree, current) {
    let sonNode = '',broNode = '';

    // Find the first child node and the sibling node
    for (let i = Tree.size-1; i >= 0; i --) {
        if (i - 1 >= 0 && Tree.nodes[i].parent === current.parent &&
            Tree.nodes[i-1].value === current.value) {
            broNode = Tree.nodes[i];
        }

        if (Tree.nodes[i].parent >= 0 &&
            Tree.nodes[Tree.nodes[i].parent].value === current.value) {
            sonNode = Tree.nodes[i];
        }
    }
    console.log(current, sonNode, broNode);

    return new CSTree(current.value, sonNode ? translate2CSTree(Tree, sonNode) : '',
        broNode ? translate2CSTree(Tree, broNode) : '');
}


// var myCSTree = translate2CSTree(myTree,myTree.nodes[myTree.root]);
// console.log(myCSTree);

// forest translate 2 CSTree
let forest = [new CSTree('A', new CSTree('B', '', new CSTree('C', '', new CSTree('D', '', ''))),
    ''), new CSTree('E', new CSTree('F', '', ''), ''), new CSTree('G', new CSTree('H', '',
    new CSTree('I', new CSTree('J', '', ''))))];


let CSTreeDemo = new CSTree('A', new CSTree('B', '', new CSTree('C', new CSTree('D', '', ''),
    new CSTree('E', '', ''))), '');

function CSTree2BinaryTree(CSTree) {
    if (!CSTree.firstNode && !CSTree.nextSlibing) {
        return new BinaryTree(CSTree.value, '', '');
    }

    return new BinaryTree(CSTree.value, CSTree.firstNode ? CSTree2BinaryTree(CSTree.firstNode) : '',
        CSTree.nextSlibing ? CSTree2BinaryTree(CSTree.nextSlibing) : '');
}

let binaryForest = forest.map((item)=>{
    return CSTree2BinaryTree(item);
});

function Forest2BinaryTree(forest) {
    let prev;

   if (forest.length === 0) {
       return '';
   }
   prev = forest.shift();
   prev.rChild = Forest2BinaryTree(forest);

   return prev;
}

function preOrder(BST) {
    console.log(BST.value);
    if (BST.lChild) {
        preOrder(BST.lChild);
    }
    if (BST.rChild) {
        preOrder(BST.rChild);
    }
}

preOrder(Forest2BinaryTree(binaryForest));

