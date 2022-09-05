//Arrow Functions
(function(){
    // let numbers = [1,2,3,4,5];
    let numbers = [1,2,3,4,5,6,7,8,9,10];

    // let multiples =numbers.map((value)=>{
    //     return value * 5;
    // })

    let multiples= numbers.map((value)=>value * 5)
    console.log(multiples);


     //srtingsand names
    let names=["Peter","Tony","Steve"];
    let newNames =names.map((name) => "Mr " + name)
    console.log(newNames);


      //square of array
     let squares = numbers.map((number)=> number * number)
      console.log (squares)
 
        
        //even numbers
    
         let evenNumber = numbers.filter((number)=> number % 2 ==0)
    
         console.log(evenNumber);

})();