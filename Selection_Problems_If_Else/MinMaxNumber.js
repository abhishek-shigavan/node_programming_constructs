/**
 * Write a program that reads 5 Random 3 Digit values and then outputs the minimum and the maximum value
 * 
 * @author Abhishek Shigavan 
 */

const NUMBERLIMIT = 5;
let count = 1;
let maxNumber;
let minNumber;
while(count <= NUMBERLIMIT){
    //creating 3 digit random number
    let number = (Math.floor(Math.random() * 900)) + 100;

    if(count == 1){
        //making first number as maximum & minimum
        maxNumber = number;
        minNumber = number;
    }
    else{
        //comparing number with maximum number
        if(number > maxNumber)
            maxNumber = number;
        //comparing number with minimum number    
        if(number < minNumber)
            minNumber = number;    
    }
    console.log(`Number ${count} : ${number}`);
    count++;
}

console.log(`Maximum Number : ${maxNumber}`);
console.log(`Minimum Number : ${minNumber}`);