/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    if(obstacleGrid.length === 0) {
        return 0;
    }
    let row = obstacleGrid.length, col = obstacleGrid[0].length, result = new Array(col).fill(0);

    result[0] = 1;
    for (let i = 0; i < row; i ++) {
        for (let j = 0; j < col; j ++) {
            if (obstacleGrid[i][j] === 1) {
                result[j] = 0
            } else if (j > 0){
                result[j] += result[j-1];
            }
        }
    }

    return result[col-1];
};

uniquePathsWithObstacles([[0,1]])