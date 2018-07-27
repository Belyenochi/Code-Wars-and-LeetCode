class HuffmanTree {
    constructor(weight, lchild, rchild) {
        this.weight = weight;
        this.lchild = lchild;
        this.rchild = rchild;
    }
}

let message = [1,1,3,5];// simulator weight
function translate2Node(message) {
    return message.map((item)=>{
        return new HuffmanTree(item, '', '');
    })
}

function buildHuffTree(messageNode) {
    let node1,node2;

    sortMessage(messageNode);
    while(messageNode.length > 1) {
        node1 = messageNode.shift();
        node2 = messageNode.shift();

        messageNode.push(new HuffmanTree(node1.weight+node2.weight,node1,node2));
        sortMessage(messageNode);
    }

    return messageNode.pop();
}

function sortMessage(message) {
    return message.sort((item,nextItem)=>{
        return item.weight > nextItem.weight;
    })
}

function getMinWeight(HuffmanTree, counter) {
    if (!HuffmanTree.lchild && !HuffmanTree.rchild) {
        return counter * HuffmanTree.weight;
    }
    return getMinWeight(HuffmanTree.lchild, counter+1) +
        getMinWeight(HuffmanTree.rchild, counter+1);
}

console.log(getMinWeight(buildHuffTree(translate2Node(message)), 0));
