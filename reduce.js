(function(){

    let numbers =[9, 23, 8, 5, 4, 2];
    //sum = sum + i
    let sum = numbers.reduce(function(prev, curr){
         return prev + curr;

    })

    console.log(sum);
    

    let donations =[
        {
            name:"XYZ",
            amount:1000
        },
        {
            name:"ABC Company",
            amount: 5000
        },
        {
            name:"PQA Company",
            amount: 500
        }


    ]

    let totalAmount = donations.map((item) => item.amount)
                         .reduce((prev,curr)=> prev +curr,3500)//3500 is assumed previous amount
    
   
        
 
    console.log(totalAmount); //6500 //10000




})();