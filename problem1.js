(function(){

    function get PostiveMEgativeArray(numbers){
       
        let postives = numbers.filter((item))=>item>-1
        let negatives= number.filter((item))=>item<0
        console.log("PostivesArray"+ postives);
        console.log("NagativesArray"+ negatives);
    }
    console.log([-1,2,-91,0,-6,89,12,-2345])
})();