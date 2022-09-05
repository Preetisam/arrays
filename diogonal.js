(function(){

    let matrix=[[1,0,0],[0,1,0],[0,0,1]];

    
    console.log(matrix)
    for (let i= 0 ;i<matrix.length;i++){
        console.log(matrix[i]);
        for(let j =0;j<matrix[i].length;j++){
            console.log(matrix[i][j]);
            if(i!=j && matrix[i][j]!=0){
                return false;

            }
        }
        return true;
    }
    console.log(matrix)


})();