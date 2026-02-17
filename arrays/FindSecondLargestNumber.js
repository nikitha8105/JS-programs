function findSecondLargest(arr) {
    var sortedArray = arr.sort(function(a, b) {
        return b - a;
    });

    return sortedArray[1];
}
let numbers = [1, 16, 12, 8, 5];
console.log(findSecondLargest(numbers));