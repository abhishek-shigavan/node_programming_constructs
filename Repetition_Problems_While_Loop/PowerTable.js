/**
 * Write a program that takes a command-line argument n & 
 * prints a table of the powers of 2 that are less than 
 * or equal to 2^n till 256 is reached.
 * 
 * @author Abhishek Shigavan
 */

let prompt = require("prompt-sync")();
let power = prompt("Enter Power to get Power Table of 2: ")

let nPowerOf2 = 2;
let zeroPowerOf2 = 1;
let i = 0;
while(i <= power){
    if(i == 0){
        console.log(`2 ^ ${i} = ${zeroPowerOf2}`);
    }
    else if(i > 0 && nPowerOf2 <= 256){
        console.log(`2 ^ ${i} = ${nPowerOf2}`);
        nPowerOf2 = 2 * nPowerOf2;
    }
    else{
        break;
    }
    i++;    
}