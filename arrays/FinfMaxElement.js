function maxElement(arr){
    var max =arr[0];
    for(i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}

const arr = [1, 2, 3, 4, 5];
console.log(maxElement(arr));