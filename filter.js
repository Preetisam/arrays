(function(){
    let numbers = [1,2,3,4,5,6,7,8,9,10];

     let evenNumbers = numbers.filter((number)=> number % 2 ==0);

     console.log(evenNumbers);

 

     let stateWithCapitalCity = [
        {
            state:"Maharastra",
            captial:"Mumbai",
            noOfDistrict:"38"

        },
        {
            state:"Rajasthan",
            captial:"Jaipur",
            noOfDistrict:"35"

        },
        {
            state:"Andhara",
            captial:"Amravati",
            noOfDistrict:"36"

        },
        {
            state:"Goa",
            captial:"Panaji",
            noOfDistrict:"2"

        }

    ];

       let stateWithMoreThan35Districts = stateWithCapitalCity.filter((item)=>
        item.noOfDistrict > 35
        );
       console.log( stateWithMoreThan35Districts)
     
      


        





})();