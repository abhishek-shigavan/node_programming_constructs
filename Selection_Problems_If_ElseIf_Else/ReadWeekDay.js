/**
 * Read a Number and Display the week day (Sunday, Monday,...)
 * 
 * @author Abhishek Shigavan
 */

const prompt = require("prompt-sync")();
let dayNumber = prompt("Enter Day Number To Read (1-7) : ");
let message = `Day ${dayNumber} of Week is `;

if(dayNumber == 1)
    console.log(`${message} Sunday`);
else if(dayNumber == 2)
    console.log(`${message} Monday`);
else if(dayNumber == 3)
    console.log(`${message} Tuesday`);
else if(dayNumber == 4)
    console.log(`${message} Wednessday`);
else if(dayNumber == 5)
    console.log(`${message} Thrusday`);
else if(dayNumber == 6)
    console.log(`${message} Friday`);
else if(dayNumber == 7)
    console.log(`${message} Saturday`);
else
    console.log("Wrong Day Number...!!!");