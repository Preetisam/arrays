(function(){
    function unique(arr){
        let uniqObj = {};
        for(let i =0; i<arr.length; i++){
            uniqObj[arr[i]] = i;
          
            }
           
        return Object.keys(uniqObj); 
    }

   let duplicate =['a','b','a','c','d','d'];
   console.log(unique(duplicate));
})();