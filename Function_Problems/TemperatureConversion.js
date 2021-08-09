/**
 * Help user find degF or degC based on their Conversion Selection. 
 * Use Case Statement and ensure that the inputs are within the Freezing Point
 * (0 °C / 32 °F ) and the Boiling Point of Water ( 100 °C / 212 °F )
 *   a. degF = (degC * 9/5) + 32
 *   b. degC = (degF – 32) * 5/9
 * 
 * @author Abhishek Shigavan
 */

let getFahrenheit = function(unitValue){
        let cel_to_fahren = (unitValue * 9/5) + 32;
        console.log(`${unitValue} Celsius = ${cel_to_fahren} Fahrenheit`);
}

let getCelsius = function(unitValue){
        let fahren_to_cel = (unitValue - 32)* 5/9;
        console.log(`${unitValue} Fahrenheit = ${fahren_to_cel} Celsius`);
}

const prompt = require('prompt-sync')();
const option = prompt(`*** Unit Conversion Options *** 
1. Celsius To Fahrenheit 
2. Fahrenheit To Celsius 
Enter Conversion Option : `);

let flag = true;
let unitValue = 0;
while(flag){
    unitValue = prompt("Enter unit value for the unit conversion: ");

    if(option == 1 && unitValue >= 0 && unitValue <=100)
        flag = false;
    else if(option == 2 && unitValue >= 32 && unitValue <= 212)
        flag = false;
    else{
        console.log(`Incorrect Unit Value..!!
        Value For Celsius Should Be Between 0 C - 100 C
        Value For Fahrenheit Should Be Between 32 F - 212 F`);
    }
}

switch(option){
    case 1:
        getFahrenheit(unitValue);
        break;
    case 2:
        getCelsius(unitValue);
        break;
    default:
        console.log(`Incorrect Option...!!!`);        
}