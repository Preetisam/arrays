(function(){
    // function swap(a,b){
    

        // let temp;
        // temp = a;//temp = 5 a=5, b=6
        // a = b;//temp = 5,a = 6, b= 6
        // b = temp//temp= 5, a =6 ,b =5
         
        // return {
        //     a:a,
        //     b:b
        // }
        function swap (arr,left,right){
            let temp;
            temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp
        }
        
        function reverse(arr){
        if(arr.lenght == 1){
            return arr[0];

        }

        let leftPointer = 0;
        let rightPointer =arr.lenght - 1;
         

        while(leftPointer <= rightPionter){
            swap(arr, leftPointer, rightPointer);
            // console.log ("After sawp" + arr[leftPointer]+""+[rightPointer])
        //   swap(arr [leftPointer], arr[rightPointer]);
        //   console.log ("Before sawp" + arr[leftPointer]+""+[rightPointer])
          leftPointer++;
          rightPointer--;
        }
        return arr;

    }

    console.log(reverse[1,2,3,4,5,6])



})();