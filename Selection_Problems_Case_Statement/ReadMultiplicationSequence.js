/**
 * Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...
 * 
 * @author Abhishek Shigavan
 */

const prompt = require("prompt-sync")();
let number = prompt("Enter Number From Multiplication Sequence 1,10,100,.... : ");
let message = "Entered Number From Multiplication Sequence is ";

switch(Number(number)){
    case 1:
        console.log(`${message} Unit`);
        break;
    case 10:
        console.log(`${message} Ten`);
        break;
    case 100:
        console.log(`${message} Hundred`);
        break;
    case 1000:
        console.log(`${message} Thousand`);
        break;
    case 10000:
        console.log(`${message} Ten thousand`);
        break;
    case 100000:
        console.log(`${message} Lakhs`);
        break;
    case 1000000:
        console.log(`${message} Ten Lakhs`);
        break;
    case 10000000:
        console.log(`${message} Crore`);
        break;
    case 100000000:
        console.log(`${message} Ten crore`);
        break;
    default:
        console.log("Invalid Input...!!!");                                    
}