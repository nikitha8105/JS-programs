function findDuplicates(arr){
    var sortedArray = arr.sort();
    var duplicates = [];
    for(i=0;i<arr.length-1;i++){
        if(sortedArray[i+1] === sortedArray[i]){
            duplicates.push(sortedArray[i]);
        }
    }
    return duplicates;
}

const arr = [1, 2, 3, 4, 5, 2, 3, 6];
console.log(findDuplicates(arr));