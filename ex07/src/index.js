// Only change code below this line
function largestNumFromArray(arr){

    var newArr = [...arr];
    var maxNumArray = [];
    for(let i = 0; i < newArr.length; i++){
        var max = newArr[i][0];
        for(let j = 1; j < newArr.length; j++){
            if ( max < newArr[i][j]){
                max = newArr[i][j];
            }
        }
        maxNumArray.push(max);
    }
    return maxNumArray;
}
// Only change code above this line

console.log(largestNumFromArray([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestNumFromArray([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 875, 1]]));
console.log(largestNumFromArray([[17, 23, 25, 12], [25, 7, 34, 48], [4, 10, 18, 21], [72, 3, 17, 10]]));
module.exports = largestNumFromArray;