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
        this.firstNode = firstNode;
        this.nextSlibing = nextSlibing;
    }
}

var myTree = new PTree(0, 10);
myTree.nodes = [new PTNode('R',-1),new PTNode('A',0),new PTNode('B',0),new PTNode('C',0),
                new PTNode('D',1),new PTNode('E', 1),new PTNode('F', 3),new PTNode('G', 6),
                new PTNode('H',6),new PTNode('K',6)];

function translate2CSTree(Tree, current) {
    let sonNode = '',broNode = '';


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


var myCSTree = translate2CSTree(myTree,myTree.nodes[myTree.root]);
console.log(myCSTree);