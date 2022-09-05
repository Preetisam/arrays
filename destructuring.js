(function(){
    // Array destructuring
    var name =["Vijay","J","Shekhawat"];
    // let firstName,middleName,lastName;
    // let lastName =name[2];
    // let firstName = name[0];
    // let middleName = nmae[1]

    // let [,middleName,]=name;
    // console.log(middleName);


    // let [firstName,middleName,lastName]=["Vijay","J","Shekhawat"]

    let [firstName,middleName="k",lastName, x= 24]=name;
    console.log(`My name is ${firstName} ${middleName}${lastName}`);
    // console.log("My name is "+firstName+""+middleName+""+lastName);
    console.log(x);

    let cities =['Mumbai',"Chennai","Kolkatta","Delhi"]
    let[,second,...restOftheCities] = cities;
    console.log(restOftheCities);
    console.log(second);
 
   




})();