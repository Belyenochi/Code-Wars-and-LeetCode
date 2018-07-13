function currentPos(mazes,x,y,n,path,minDistance,distance) {
    if (distance[0] > 0 && minDistance >= distance) return;

    if (path[x+(y*n)] === 1) {
        return;
    }

    //console.log(x, y,minDistance)
    path[x+(y*n)] = 1;

    if (x < 0 || y > n - 1 || x > n - 1 || y < 0) {

        path[x+(y*n)] = 0;
        return false;
    }
    if (x === n-1 && y === n-1 ) {
        //console.log(minDistance)
        if (!distance[0] || distance[0] > minDistance) {
            distance[0] = minDistance;
        }
        path[x+(y*n)] = 0;
        return false;
    }
    if (mazes[x+(y*n)] === 'W') {

        path[x+(y*n)] = 0;
        return false;
    }

    currentPos(mazes, x + 1,y,n,path,minDistance+1,distance) || currentPos(mazes, x,y + 1,n,path,minDistance+1,distance)
    currentPos(mazes, x - 1,y,n,path,minDistance+1,distance) || currentPos(mazes, x,y - 1,n,path,minDistance+1,distance);
    path[x+(y*n)] = 0;
}

function pathFinder(maze){
    let x = 0, y = 0,n,myMaze = [],path = [],minDistance = 0,distance=[0];

    if(maze.length === 0) {
        return true;
    }

    for (let i = 0; i < maze.length; i ++) {
        if(maze[i] !== '\n') {
            myMaze.push(maze[i]);
        }
    }
    n = Math.sqrt(myMaze.length);

    currentPos(myMaze,x,y,n,path,minDistance,distance);
    //console.log(distance)

    return  distance[0] > 0 ? distance[0] : false;
}