function mulwith2(arr){
    for(i=0;i<arr.length;i++){
        arr[i]=arr[i]*2;
    }
    return arr;
}
const numbers = [2,5,9,12];
console.log(mulwith2(numbers));