let path = [0,0,2,1,0,2];

function find(x) {
    let r1 = x, r2 = x, temp;
    while (path[r1] !== r1) {
        r1 = path[r1];
    }

    // r1 is one brunch boss
    while (r2 !== r1) {  // path compression
        temp = path[r2];
        path[r2] = r1;
        r2 = temp;
    }

    return r1;
}

function join(x, y) {
    path[find(x)] = find(y); // boss x  is a subordinate of boss y
}

function f(path, brunch) {
    path.forEach((item,index)=>{
        find(index);
        if (brunch.indexOf(path[item]) === -1) {
            brunch.push(path[item]);
        }
    });

    return brunch.length;
}

console.log(f(path, []) - 1); // How many roads are still in order to connect all nodes?