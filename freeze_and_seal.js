(function(){
    "use srtict";
    let learner={};
    learner.name ="Jayesh";
    learner.lastName ="Chauhan";
    
    // let student = learner;

    Object.freeze(learner);
    //after freeze you cant add or delete any thing
    // delete learner.lastName;
    //learner.lastName ="Chauhan" //can't add
    console.log(Object.isFrozen(learner));//true//condtion to check object is frozen

    console.log(student);
    student.name ="Harish";

    //seal
    let student ={};
    student.name ="Salman";
    student.lastName ="shaikh";
     Object.seal(student);
     console.log(student.name);

        delete student.name; //value can be changed but cant add or delete

 //

     
})();