/**
 * Write a program that takes a year as input and outputs the Year is a Leap Year or not a Leap Year.
 * A Leap Year checks for 4 Digit Number, Divisible by 4 and not 100 unless divisible by 400.
 * 
 * @author: Abhishek Shigavan
 */

const prompt = require("prompt-sync")();
let yearValue = prompt("Enter year to check Leap Year / Not : ");

let divisibleBy4 = yearValue % 4;
let divisibleBy100 = yearValue % 100;
let divisibleBy400 = yearValue % 400;

if(yearValue >= 1000 & yearValue <=9999){
    let result = false;
    if(divisibleBy4 == 0){
        if(divisibleBy100 == 0){
            if(divisibleBy400 == 0)
                result = true;
        }
    }

    if(result)
        console.log(`Year : ${yearValue} is a Leap Year`);
    else
        console.log(`Year : ${yearValue} is Not a Leap Year`);
}
else{
    console.log("Plz Enter Correct Year Value");
}      