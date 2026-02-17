function RemoveDuplicates(arr){
    var newArray= [];
    for(i=0;i<arr.length;i++){
        if(newArray.indexOf(arr[i]) === -1){
            newArray.push(arr[i]);
        }
    }
    
    return newArray;
}

const arr = [1, 2, 3, 4, 5, 2, 3, 6];
console.log(RemoveDuplicates(arr));