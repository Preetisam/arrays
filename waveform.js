(function(){
    function wave(matrix, total_cols, total_rows){
        let col=0;
     
        while(col <= total_cols){
            if(col % 2 ==0){
                for(let row = 0; col < total_cols; col++){
                console.log(matrix[row][col]);
            }
            } else {
                for(let row =total_rows-1;row>=0;row--){
                console.log(martix[row][col]);
                }
        
            }

            col++
        } 
    }

        
    

    let matrix = [[1,2,3,4],[,5,6,7,8],[9,10,11,12]]
        console.log(wave(matrix, 3,4))

})();