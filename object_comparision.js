(function(){
    var obj1 ={
        name:"John",
        age: 34,
        // location:"London",
        

    }
    let obj2={
        name:"John",
        age:34,
        location:"London"
    }

    function isEqual(first,second){
        let equal = true;
        let firstObjKeys = Object.keys(first);
        let secondObjKeys = Object.keys(second);
        let ObjToIterate = first;
        if(secondObjKeys>firstObjKeys){
            ObjToIterate = second;
        }
        for(let key in ObjToIterate){
            if(first[key] !== second[key]){
                equal =false;
                break;
            }
        
        }
      return equal;
    }
    console.log(isEqual(obj1,obj2));
    
})();