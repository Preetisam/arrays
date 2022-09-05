(function(){ 
    let studentDetails={
        nameOfStudens:{
           
            nameWithIntial:"DaasriElenaGrace",
            dateOfBirth:21/04/2017,
            class:"firstclass",
            personalDetails:{
            motherTounge:"Telugu",
            bloodgroup:"B +postive"
            },

        },
        familyDeatails:{
            fatherName:"DasariPushparaj",
            motherMane:"KamillaPreetiSamuel",

        },
        transportDeatails:{
            schoolBus:"yes",
            pickUpPiont:"nearRailwayGAte",
            dropPoint:"nearPostOffice",

        },
        adress:{
            houseNumber:303,
            landmark:"SRMUniversity",
            state:"TamilNadu"
            

        }



        }



    let { nameOfStudens:{personalDetails :{motherTounge,bloodgroup}}} =  studentDetails;
    console.log(motherTounge)
    console.log(bloodgroup)

})();
