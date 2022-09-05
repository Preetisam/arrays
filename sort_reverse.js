(function(){
    let numbers =[43,90,25,3,12,0,31];

    let names = ["Arnab","Vijay","Jayesh","Aarav"];

    // numbers.sort((a,b)=> a - b);  //asecnding
    // numbers.sort((a,b)=> b - a);  //decending

    numbers.sort(function(a,b){
        console.log(" a= " + a + " b= " + b)
        return a-b;

    })


    names.sort();

    console.log(numbers); 
    
    console.log(names); 









})();