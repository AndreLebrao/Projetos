// let js = "amazing";
// if (js === "amazing");
// console.log(js);

// let firstName = "Dre";
// let varCase = "JS normally uses camelCase";
// let PI = 3.1415;

// console.log("Unexpected token === illegal variable name");
// console.log("no variables with upper case");

// console.log(PI);
// console.log(firstName);
// console.log(varCase);

// console.log(typeof firstName);
// console.log(typeof true);
// console.log(typeof "Jatobs");

// let year;
// //Tanto o valor quanto o type do valor de um undefined é undefined
// console.log(year);
// console.log(typeof year);

// //bug conhecido do JS
// console.log(typeof null);

// //pode mudar
// let age = 20;
// age = 21;
// //nao pode mudar
// const birthYear = 2000;
// //nao usar var, because it is function scoped instead of block scoped (let)
// var middleName = "Lebrao";
// middleName = "Aigner";
// //funciona mas nao deve ser usado, pq adiciona uma propriedade ao escopo global ao invez de declarar uma variavel
// lastName = "Ribeiro";
// console.log("lastName");

// const now = 2020;
// const ageJonas = now - 1991;
// const ageSarah = now - 2003;
// console.log(ageJonas, ageSarah);

// const firstName = "Andre";
// const lastName = "Lebrao";
// console.log(firstName + " " + lastName);

// //Assingment Operators
// let x = 10;
// x += 10; //20
// x -= 10; //10
// x *= 10; //100
// x++; //101
// x--; //100
// x--; //99
// console.log(x);

// //Comparison Operators
// console.log(ageJonas > ageSarah);
// console.log(ageJonas < ageSarah);
// console.log(ageJonas <= 20);
// console.log(ageSarah >= 18);
// const ehDeMaior = ageSarah >= 18;

// const now = 2020;
// const ageJonas = now - 1991;
// const ageSarah = now - 2003;
// console.log(ageJonas, ageSarah);
// console.log(now - 1991 > now - 2003);

// let x, y;
// x = y = 20 - 10 - 5;
// console.log(x, y);

const firstName = "Andrew";
const job = "teacher";
const birthYear = 2000;
const year = 2021;

const andrew =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log("soma");
console.log(andrew);
console.log("str literal");
const andrewNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(andrewNew);

console.log(`Strings
with
multiple
lines`);
