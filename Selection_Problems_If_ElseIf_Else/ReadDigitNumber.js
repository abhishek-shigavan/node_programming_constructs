/**
 * Read a single digit number and write the number in word
 * 
 * @author Abhishek Shigavan
 */

const prompt = require("prompt-sync")();
let digitNumber = prompt("Enter Digit Number To Read (0-9): ");
let message = "Enter Digit Number is ";

if(digitNumber == 0)
    console.log(`${message} Zero`);
else if(digitNumber == 1)
    console.log(`${message} One`);
else if(digitNumber == 2)
    console.log(`${message} Two`);
else if(digitNumber == 3)
    console.log(`${message} Three`);
else if(digitNumber == 4)
    console.log(`${message} Four`);
else if(digitNumber == 5)
    console.log(`${message} Five`);
else if(digitNumber == 6)
    console.log(`${message} Six`);
else if(digitNumber == 7)
    console.log(`${message} Seven`);
else if(digitNumber == 8)
    console.log(`${message} Eight`);
else if(digitNumber == 9)
    console.log(`${message} Nine`);
else
    console.log(`${digitNumber} Is Not a Single Digit Number...Plz Enter Correct Number...!!!`);    
