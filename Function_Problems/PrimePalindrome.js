/**
 * Take a number from user and check if the number is a Prime then show that its palindrome is also prime
 *   a. Write function check if number is Prime
 *   b. Write function to get the Palindrome.
 *   c. Check if the Palindrome number is also prime
 * 
 * @author Abhishek Shigavan
 */

let isPrimeNumber = function(inputNumber){
    flag = true;
    for(let i = 2; i <= parseInt(inputNumber/2); i++){
        if(inputNumber % i == 0){
            console.log(`${inputNumber} is not a Prime Number`);
            flag = false;
        }
    }
    if(flag)
        console.log(`${inputNumber} is Prime Number`);
    return flag;
}

let isPalindrome = function(inputNumber){
    let flag = false;
    let originalNumber = inputNumber;
    let reverseNumber = 0;
    let remainder = 0;

    while(originalNumber != 0){
        remainder = originalNumber % 10;
        originalNumber = parseInt(originalNumber / 10);
        reverseNumber = (10 * reverseNumber) + remainder;
    }
    
    if(inputNumber1 == reverseNumber){
        console.log(`${inputNumber} is Palindrome Number`);
        flag = true;
    }
    else{
        console.log(`${inputNumber} is NOT a Palindrome`);
        flag = false;
    }
    return flag;
}

const prompt = require("prompt-sync")();
let inputNumber = prompt("Enter Number : ");

let is_inputNumber_Prime = isPrimeNumber(inputNumber);
let is_inputNumber_Palindrome;
if(is_inputNumber_Prime){
    is_inputNumber_Palindrome = isPalindrome(inputNumber);
}

if(is_inputNumber_Palindrome){
    console.log(`Entered Number : ${inputNumber} 
    ${inputNumber} is Prime Number & Palindrome.
    Palindrome of ${inputNumber} is also a Prime Number`); 
}    