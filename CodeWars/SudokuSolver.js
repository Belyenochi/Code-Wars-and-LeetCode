var puzzle = [
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,9]];

function sudoku(puzzle) {
    //return the solved puzzle as a 2d array of 9 x 9
    let currRow = 0,currCol = 0;

    seekAnswer(puzzle,currRow, currCol);
    return puzzle;
}

function seekAnswer(puzzle,currRow,currCol) {
    let currentVal, currPossible;

    if (currRow !== puzzle.length ||
           currCol !== 0 ) {

        if (puzzle[currRow][currCol] === 0) {
            currPossible = getPossibleVal(puzzle,currRow,currCol);
            if (!currPossible.length) return false;
            while (currPossible.length !== 0) {
                currentVal = currPossible.pop();

                puzzle[currRow][currCol] = currentVal;
                if (seekAnswer(puzzle, currCol === puzzle.length-1 ? currRow + 1 : currRow
                    ,currCol === puzzle.length-1 ? 0 : currCol + 1)) {
                    return true;
                }
                puzzle[currRow][currCol] = 0;
            }
            return false;
        } else {
            return seekAnswer(puzzle, currCol === puzzle.length-1 ? currRow + 1 : currRow
                ,currCol === puzzle.length-1 ? 0 : currCol + 1)
        }
    }
    return true;
}

function getPossibleVal(puzzle,rowNum, colNum) {
    let possibleVal = [1,2,3,4,5,6,7,8,9];
    let hypotenuse = [],col = [], row = [], rowN = parseInt(rowNum / 3), colN = parseInt(colNum / 3);
    row = puzzle[rowNum];

    for (let i = 0; i < 3; i ++) {
        for (let j = 0; j < 3; j ++) {
            hypotenuse.push(puzzle[rowN*3+i][colN*3+j]);
        }
    }

    for (let i = 0; i < puzzle.length; i ++) {
        col.push(puzzle[i][colNum]);
    }

    return possibleVal.filter((item)=>{
        return !(row.indexOf(item) !== -1) &&
               !(col.indexOf(item) !== -1) &&
               !(hypotenuse.indexOf(item) !== -1);
    })
}

console.log(sudoku(puzzle));