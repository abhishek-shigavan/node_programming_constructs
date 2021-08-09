/**
 * Find the Magic Number
 *  a) Ask the user to think of a number between 1 - 100
 *  b) Then check with the user if the number is less than n/2 or greater
 *  c) Repeat till the Magic Number is reached.
 *
 * @author Abhishek Shigavan
 */

const prompt = require("prompt-sync")();
console.log("Think any number between 1 - 100");
 
let low = 1;
let high = 100;
while(low <= high){
    let midValue = parseInt((low + high) / 2);
 
    console.log(`Is ${midValue} is the number ur thinking 
    If Yes enter 0
    If number greater than ${midValue} enter 1
    If number less than ${midValue} enter 2`);
    let response = prompt("Enter ur response here : ")
     
    if(response == 0){
        console.log("We got ur number...!!!");
        break;
    }
    else if(response == 1){
        low = midValue + 1;
    }
    else if(response == 2){
        high = midValue - 1;
    }
}