/**
 * Read a single digit number and write the number in word using Case
 * 
 * @author Abhishek Shigavan
 */

const prompt = require("prompt-sync")();
let digitNumber = prompt("Enter Digit Number To Read (0-9): ");
let message = "Enter Digit Number is ";

switch(Number(digitNumber)){
    case 0:
        console.log(`${message} Zero`);
        break;
    case 1:
        console.log(`${message} One`);
        break;
    case 2:
        console.log(`${message} Two`);
        break;
    case 3:
        console.log(`${message} Three`);
        break;
    case 4:
        console.log(`${message} Four`);
        break;
    case 5:
        console.log(`${message} Five`);
        break;
    case 6:
        console.log(`${message} Six`);
        break;
    case 7:
        console.log(`${message} Seven`);
        break;
    case 8:
        console.log(`${message} Eight`);
        break;
    case 9:
        console.log(`${message} Nine`);
        break;
    default:
        console.log(`${digitNumber} Is Not a Single Digit Number...Plz Enter Correct Number...!!!`);
        break;
}