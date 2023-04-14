var fruit1 = "banana";
var fruit2 = "pineapple";
var fruit3 = "apple";
var fruit4 = "peach";
var fruit5 = "orange";

var fruitArray = ["banana", "pineapple", "apple", "peach", "orange"];

var mixedArray = [42, "pineapple", true, [3, 6, "nine"], "orange"];

console.log(fruitArray);

fruitArray[1] = "tomato";

console.log(fruitArray[0]);

for(let furit of fruitArray){
    if(furit === "tomato"){
        console.log("Is tomato a furit?");
    } else {
        console.log(furit);
    }
}