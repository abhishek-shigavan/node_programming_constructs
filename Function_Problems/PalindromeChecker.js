/**
 * Write a function to check if the two numbers are Palindromes
 * 
 * @author Abhishek Shigavan
 */

let isPalindrome = function(inputNumber1){
    let flag = false;
    let originalNumber = inputNumber1;
    let reverseNumber = 0;
    let remainder = 0;

    while(originalNumber != 0){
        remainder = originalNumber % 10;
        originalNumber = parseInt(originalNumber / 10);
        reverseNumber = (10 * reverseNumber) + remainder;
    }
    
    if(inputNumber1 == reverseNumber){
        console.log(`1st Number : ${inputNumber1} is Palindrome Number`);
        flag = true;
    }
    else{
        console.log(`1st Number : ${inputNumber1} is NOT a Palindrome`);
        flag = false;
    }
    
    return flag;
}

const prompt = require("prompt-sync")();
let inputNumber1 = prompt("Enter 1st Number : ");
let inputNumber2 = prompt("Enter 2nd Number : ");

let number1_Palindrome = isPalindrome(inputNumber1);

if(number1_Palindrome && inputNumber1 == inputNumber2)
    console.log(`2nd Number : ${inputNumber2} is a Palindrome of 1st Number : ${inputNumber1}`);
else if(number1_Palindrome && inputNumber1 != inputNumber2)
    console.log(`2nd Number : ${inputNumber2} is NOT a Palindrome of 1st Number : ${inputNumber1}`);