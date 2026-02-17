function sumOfElements(arr){
    var sum=0;
    for(i=0;i<arr.length;i++){
        sum= sum+arr[i];
    }
    return sum;
}

const arr =[1,2,3,4,5];
console.log(sumOfElements(arr));