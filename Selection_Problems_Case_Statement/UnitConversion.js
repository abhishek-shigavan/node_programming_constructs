/**
 * Write a program that takes User Inputs and does Unit Conversion of different Length units
 *   1. Feet to Inch 
 *   2. Feet to Meter
 *   3. Inch to Feet
 *   4. Meter to Feet
 * 
 * @author Abhishek Shigavan
 */

const prompt = require('prompt-sync')();
const option = prompt(`*** Unit Conversion Options *** 
1. Feet to Inch 
2. Feet to Meter 
3. Inch to Feet 
4. Meter to Feet 
Enter Conversion Option : `);
let unitValue = prompt("Enter unit value for the unit conversion: ");

switch(Number(option)){
    case 1:
        let feet_to_inch = unitValue * 12;
        console.log(`${unitValue} Feet = ${feet_to_inch} Inch`);
        break;
    case 2:
        let feet_to_meter = unitValue / 3.281;
        console.log(`${unitValue} Feet = ${feet_to_meter} Meter`);
        break;
    case 3:
        let inch_to_feet = unitValue / 12;
        console.log(`${unitValue} Inch = ${inch_to_feet} Feet`);
        break;
    case 4:
        let meter_to_feet = unitValue * 3.281;
        console.log(`${unitValue} Meter = ${meter_to_feet} Feet`);
        break;
    default:
        console.log(`Invalid Option...!!!`);                
}