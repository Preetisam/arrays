(function(){

    let matrix=[[1,2,3],[4,5,6],[7,8,9]];

    
    console.log(matrix)
    for (let i= 0 ;i<matrix.length;i++){
        console.log(matrix[i]);
        for(let j =0;j<matrix[i].length;j++){
            console.log(matrix[i][j]);
            if(i<=j){
                i++

            }
        }
    }
    console.log(matrix)


})();