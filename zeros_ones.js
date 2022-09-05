(function(){
       function sort(arr,left,right){
      let temp;
       temp = arrr[left];
        arr[left] <= arr[right]
        arr[right] =temp
       }


      function reverse(arr){
       if(arr.lenght == 1){
      return arr[0];
      }
       
     let leftPointer = 0;
        let rightPointer = arr.length - 1;

        while(leftPointer <= rightPointer) {
           swap(arr, leftPointer, rightPointer);
           leftPointer++;
           rightPointer--;
        }

        return arr;
    }
    let arr=[1,2,5]
    console.log(sortZeroOne(arr, arr.lenght))


})();



