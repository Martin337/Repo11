// Only change code below this line
function mySplice(arr1, arr2, n){

    var newArr1 = [...arr1];
    var newArr2 = [...arr2];

    var tempArr = newArr2.splice(n);
    for(let i = newArr1.length; i > 0; i--){
        newArr2.push(newArr1[i-1]);
    }
    if(tempArr.length != 0){
        for(let i = 0; i < tempArr.length; i++){
            newArr2.push(tempArr[i])
        }
    }
    return newArr2;

}


// Only change code above this line

console.log(mySplice([1, 2, 3], [4, 5], 1));
console.log(mySplice([1, 2, 3], [4, 5], 2));
console.log(mySplice(["b", "c"], ["a", "d"], 1));
console.log(mySplice(["Dell", "Philips"], ["Samsung", "AOX", "Sony"], 2));
module.exports = mySplice;  