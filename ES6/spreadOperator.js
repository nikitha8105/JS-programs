const arr1 = [1, 2];
const arr2 = [...arr1, 3];

console.log(arr2);




function add(...x){
    var sum=0;
    for(i=0;i<x.length;i++){
        sum+=x[i];
    }       
    return sum;
}
console.log(add(1, 2, 3, 4));