/**
 * Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.
 * 
 * @author Abhishek Shigavan 
 */

//defining head value
const HEAD = 0;
//generating random values for head & tail
let flipResult = (Math.floor(Math.random() * 10)) % 2;
console.log("Fliping the coin....");
    
//checking flipResult 
if(flipResult == HEAD)
    console.log("Head it is");
else
    console.log("Tail it is");