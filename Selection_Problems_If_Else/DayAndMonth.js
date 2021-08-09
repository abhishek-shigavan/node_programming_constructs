/**
 * Write a program that takes day and month from the command line and 
 * prints true if day of month is between March 20 and June 20, false otherwise.
 * 
 * @author Abhishek Shigavan
 */

const prompt = require("prompt-sync")();
const day = prompt("Enter the day (1-31): ");
const month = prompt("Enter the month (1-12): ");
 
if(month == 3 && day >= 20 && day <= 31)
    console.log("True");
if(month == 4 && day >= 1 && day <= 30)
    console.log("True");
if(month == 5 && day >= 1 && day <= 31)
    console.log("True");
if(month == 6 && day >= 1 && day <= 20)    
    console.log("True");
else
    console.log("False");