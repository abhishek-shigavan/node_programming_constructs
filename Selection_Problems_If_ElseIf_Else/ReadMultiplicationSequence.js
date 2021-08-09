/**
 * Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...
 * 
 * @author Abhishek Shigavan
 */

const prompt = require("prompt-sync")();
let number = prompt("Enter Number From Multiplication Sequence 1,10,100,.... : ");
let message = "Entered Number From Multiplication Sequence is ";

if(number == 1) 
    console.log(`${message} Unit`);
else if(number == 10) 
    console.log(`${message} Ten`);
else if(number == 100) 
    console.log(`${message} Hundred`);
else if(number == 1000) 
    console.log(`${message} Thousand`);
else if(number == 10000) 
    console.log(`${message} Ten thousand`);
else if(number == 100000) 
    console.log(`${message} Lakhs`);
else if(number == 1000000) 
    console.log(`${message} Ten Lakhs`);
else if(number == 10000000) 
    console.log(`${message} Crore`);
else if(number == 100000000) 
    console.log(`${message} Ten crore`);
else if(number == 1000000000) 
    console.log(`${message} Arab`);
else if(number == 10000000000) 
    console.log(`${message} Ten Arab`);
else 
    console.log("Invalid input");
