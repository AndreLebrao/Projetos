"use strict";
const d1 = 44;
const d2 = 23;
const d3 = 71;
const k1 = 65;
const k2 = 54;
const k3 = 49;
const calcAverage = (score1,score2,score3) =>(score1+ score2+ score3)/3 ;
const avgD = calcAverage(d1,d2,d3);
const avgK = calcAverage(k1,k2,k3);
console.log(avgD,avgK);
function checkWinner(avgD,avgK){
    if(avgD>2*avgK)
    console.log(`Dolphins win(${avgD} vs. ${avgK})`);
    else if(avgK>2*avgD)
    console.log(`Koalas win(${avgK} vs. ${avgD})`);
    else
    console.log('No one wins')
}

checkWinner(avgD,avgK)