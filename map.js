(function(){
    let numbers = [1,2,3,4,5];
    //expected output[5,10,15,20,25];
   
    //mutiply by5 is call backfun
     
   
    let multiples = numbers.map(function(value){
        return value*5;
    });
    console.log(multiples);
    console.log(numbers);
    //[5,10,15,20,25]


    // let mutiples = numbers.map((value) =>value *5);
     // numbers.map(function(value,index,arr){});
     
    // numbers.map(multipleBy5);
    // function multipleBy5(value,i,arr){

    
    

    
       

    


    






})();