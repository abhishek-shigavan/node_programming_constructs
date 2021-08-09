/**
 * Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.
 * Extend the coin flip till either Heads or Tails wins 11 times.
 * 
 * @author Abhishek Shigavan
 */

const HEAD = 0;
const WIN_COUNT = 11;
let headCount = 0;
let tailCount = 0;
let gameCount = 0;

while(true){
    let flipResult = (Math.floor(Math.random() * 10)) % 2;
    gameCount++;
    console.log(`Game No : ${gameCount}`);

    if(flipResult == HEAD){
        console.log("Heads it is..");
        headCount++;
    }
    else{
        console.log("Tails it is..");
        tailCount++;
    }

    let message =`Total Game Won By Head : ${headCount}\nTotal Game Won By Tail : ${tailCount}`;
    
    if(headCount == WIN_COUNT){
        console.log(message);
        console.log("Head is Winner");
        exit;
    }
    else if(tailCount == WIN_COUNT){
        console.log(message);
        console.log("Tail is Winner");
        exit;
    }
}