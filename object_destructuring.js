(function(){
    // var learner={
    //     name:"XYZ",
    //     age :24,
    //     location: "Jaipur"
    // }
    // console.log(learner.age);
    // let {name: firstName,age,location,course} = learner;
    // console.log(firstName);

    let Employee ={
        personal:{
            name:"",
            age:"",
            gender:""
        },
        identification:{
            adhar:"",
            pen:""
        },
        marks:{
            pcm:{ 
                physics:60,
                chemistry: 50
            },
        
        }
    }
    // let personalInfornation = Employee.personal.pcm.chemistry;
    // let chemistry = Employee.marks.pcm.chemistry;
    // let physics = Employee.marks.pcm.physics;
    let {marks:{pcm :{chemistry,physics}}} = Employee;
    console.log(chemistry)
    console.log(physics)







})();