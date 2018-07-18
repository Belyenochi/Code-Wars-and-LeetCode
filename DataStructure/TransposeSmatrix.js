class Tripe {
    constructor(rowNum,colNum,val) {
        this.rowNum = rowNum;
        this.colNum = colNum;
        this.val = val;
    }
}

class TSMatrix {
    constructor(data,row,col,nzero) {
        this.data = data;
        this.row = row;
        this.col = col;
        this.nzero = nzero;
    }
    // normal transpose algorithm
    transposeSMatrix() {
        let data = [];
        for (let i = 1; i <= this.col; i ++) {
            for (let j = 0; j < this.nzero; j++) {
                if (this.data[j].colNum === i) {
                    //console.log(this.data[j]);
                    data.push(new Tripe(this.data[j].colNum,
                        this.data[j].rowNum, this.data[j].val));
                }
            }
        }
        return new TSMatrix(data,this.col,this.row,this.nzero);
    }
    // faster transpose algorithm
    fasterTransposeSMatrix() {
        let data = [];
        for (let j = 0; j < this.nzero; j++) {
            data[this.data[j].rowNum + (this.data[j].colNum - 1) * this.row - 1] =
                new Tripe(this.data[j].colNum,this.data[j].rowNum, this.data[j].val);
        }

        return new TSMatrix(data,this.col,this.row,this.nzero);
    }
}

let matrix,matrixData = [];
for (let i = 1; i <= 3; i ++) {
    for (let j = 1; j <= 3; j ++) {
        matrixData.push(new Tripe(i,j,Math.floor(Math.random()*10)));
    }
}


matrix = new TSMatrix(matrixData,3,3,9);
matrix.data.forEach((item)=>{
    console.log(item.rowNum,item.colNum,item.val);
});

let matrix2 = matrix.transposeSMatrix();
console.log("===================");
matrix2.data.forEach((item)=>{
    console.log(item.rowNum,item.colNum,item.val);
});

let matrix3 = matrix.fasterTransposeSMatrix();
console.log("===================");
matrix3.data.forEach((item)=>{
    console.log(item.rowNum,item.colNum,item.val);
});



