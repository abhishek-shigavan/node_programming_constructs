/**
 *  Enter 3 Numbers do following arithmetic operation and find the one that is maximum and minimum
 *    1. a + b * c 
 *    2. a % b + c
 *    3. c + a / b
 *    4. a * b + c
 * 
 * @author Abhishek Shigavan
 */

const prompt = require("prompt-sync")();
let a = prompt("Enter Number 1 : ");
let b = prompt("Enter Number 2 : ");
let c = prompt("Enter Number 3 : ");

let resultOfOperation1 = parseInt(a + b * c);
let resultOfOperation2 = parseInt(a % b + c);
let resultOfOperation3 = parseInt(c + a / b);
let resultOfOperation4 = parseInt(a * b + c);

let maxResult = resultOfOperation1;
let minResult = resultOfOperation1;

if(resultOfOperation2 >= maxResult)
    maxResult = resultOfOperation2;
else  if(resultOfOperation3 > maxResult)
    maxResult = resultOfOperation3;   
else if(resultOfOperation4 > maxResult)
    maxResult = resultOfOperation4;
else if(resultOfOperation2 < minResult)
    minResult = resultOfOperation2;
else if(resultOfOperation3 < minResult)
    minResult = resultOfOperation3;
else if(resultOfOperation4 < minResult)
    minResult = resultOfOperation4 
    
console.log(`Arithmetic Opeartion Performed : 
1) ${a} + ${b} * ${c} = ${resultOfOperation1}
2) ${a} % ${b} + ${c} = ${resultOfOperation2}
3) ${c} + ${a} / ${b} = ${resultOfOperation3}
4) ${a} * ${b} + ${c} = ${resultOfOperation4}`);
                            
console.log(`Maximum Result : ${maxResult}
Minimum Result : ${minResult}`);