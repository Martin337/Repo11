// Only change code below this line
function myMutation(arr){

    var checkedString = arr[0].toLowerCase();
    var letters = arr[1].toLowerCase();

    for(let i = 0; i < letters.length; i++){
        if(checkedString.includes(letters[i]) == false){
            return false;
        }
    }
    return true;
}


// Only change code above this line

console.log(myMutation(["Mary", "Aarmy"]));
module.exports = myMutation;