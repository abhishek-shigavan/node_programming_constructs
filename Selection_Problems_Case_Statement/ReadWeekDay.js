/**
 * Read a Number and Display the week day (Sunday, Monday,...)
 * 
 * @author Abhishek Shigavan
 */

const prompt = require("prompt-sync")();
let dayNumber = prompt("Enter Day Number To Read (1-7) : ");
let message = `Day ${dayNumber} of Week is `;

switch (Number(dayNumber)){
    case 1:
        console.log(`${message} Monday`);
        break;
    case 2: 
        console.log(`${message} Tuesday`);
        break;
    case 3:
        console.log(`${message} Wednessday`);
        break;
    case 4: 
        console.log(`${message} Thrusday`);    
        break;
    case 5:
        console.log(`${message} Friday`);
        break;
    case 6: 
        console.log(`${message} Saturday`);    
        break;
    case 7: 
        console.log(`${message} Sunday`);
        break;                
    default:
        console.log("Wrong Day Number...!!!");
        break;
}