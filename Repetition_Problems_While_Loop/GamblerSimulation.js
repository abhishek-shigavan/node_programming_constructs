/**
 * Write a program where a gambler starts with Rs 100 and places Re 1 bet until he/she goes broke 
 * i.e. no more money to gamble or reaches the goal of Rs 200. keeps track of number of times won 
 * and number of bets made
 * 
 * @author Abhishek Shigavan
 */

const WIN_CONDITION = 1;
const BROKE = 0;
const WIN_GOAL = 200;
let totalMoney = 100;
let winCounter = 0;
let betCounter = 0;

while(true){
    betCounter = betCounter + 1;

    let gameResult = (Math.floor(Math.random() * 10)) % 2;
    if(gameResult == WIN_CONDITION){
        totalMoney = totalMoney + 1;
        winCounter++;
    }
    else{
        totalMoney = totalMoney - 1;
    }

    if(totalMoney == BROKE){
        console.log(`You are broke..\nTotal game won: ${winCounter}\nTotal bet: ${betCounter}`);
        break;
    }
    else if(totalMoney == WIN_GOAL){
        console.log(`You reach Win Goal i.e Rs.200\nTotal game won: ${winCounter}\nTotal bet: ${betCounter}`);
        break;
    }
}