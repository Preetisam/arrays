(function(){
    function checkIfSparse(arr){
        let counter = 0;
        let rowOunt = multiArr.length;
        let coulmnCount = 0;
        for(let row =0; row < multiArr.length;row++){
            columnCiunt += multiArr[row]
            for(let col=0; col < multiArr[row].length;col++){       
                if(multiArr[row][col]==0){
                counter++;
                }
            }

           return (counter >parseInt((rowCount * columnCount)/2))
        
        
        
        
        
        
        
        
        
        
        }



    }
    let multidimensional =[[1,0,15,0][6,0,0,67],[1,0,45,0,]]
    console.log("Is Array Sparse" + checkIfSparse(multidimensional))
})();