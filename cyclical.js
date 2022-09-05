(function(){
    function cyclical(arr){
        let left =0; right = n-1;
        while(left<=right){
            let temp;
            temp =arr[left]
            arr[left] = arr[right];
            arr[right]=temp;
            left++
        }
        return arr;

    }
    let sample =[4,21,90,0-1]
    //output[-1,4,2,1,90,0]
    console.log(cyclical(sample,sample.length))
})();