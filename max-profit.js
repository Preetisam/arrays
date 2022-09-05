(function(){
    function maxprofit( price, size){
        for (i=1,i<size;i++){
            if(price[1] > price[i-1]){
                maxprofit += price[i] - price[i-1];
                return maxprofit;
            }
        }
        
    } 
    var price =[100,180,250,40,535.695];
    var n= price.length
    console.log(maxprofit(price.n));      
})();