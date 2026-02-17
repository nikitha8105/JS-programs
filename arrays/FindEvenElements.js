function evenElements(arr){
    var newArray=[];
    for(i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(evenElements(arr));