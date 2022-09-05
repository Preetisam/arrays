(function(){
     let numbers = [2, 33, 87, 25, 23, 30, 45];

    let divibleBy5 = numbers.filter(function(number,i){
        console.log(i)
        return number % 5 == 0
    })
    console.log(divibleBy5);



    let empolyees = [
        {
            name: "Ajay",
            role: "senior"
        },
        {
            name: "Vijay",
            role: "Lead"
        },
        {
            name: "Vishal",
            role: "SSE"
        },
        {
            name: "Atul",
            role: "Lead"
        },
    ]

    let Lead = empolyees.find((emp)=> emp.role == "Lead")
    console.log(Lead)

})();