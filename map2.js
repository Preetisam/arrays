(function(){
let numbers =[1,2,3,4,5,6,7,8,9,10];


    //even number array
    let evenNumbers = numbers.map(function(number){
        if (number % 2 ==0) return number;
    }); 
    console.log(evenNumbers);

    //  let names=["Peter","Tony","Steve"];
    //  let newNames =names.map(function(name){
    //  return "Mr " + name;
    // })

    let names=["Peter","Tony","Steve"];
     let newNames =names.map((name) => "Mr " + name)


    
      console.log(newNames);

     })();