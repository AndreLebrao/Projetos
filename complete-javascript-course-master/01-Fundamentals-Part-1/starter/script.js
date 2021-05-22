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

// const firstName = "Andrew";
// const job = "teacher";
// const birthYear = 2000;
// const year = 2021;

// const andrew =
//   "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
// console.log("soma");
// console.log(andrew);
// console.log("str literal");
// const andrewNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(andrewNew);

// console.log(`Strings
// with
// multiple
// lines`);

// const age = 15;
// if (age >= 18) {
//   console.log("Can start driving");
// } else {
//   const yearsleft = 18 - age;
//   console.log(`de menor, ainda faltam ${yearsleft} anos`);
// }

// const birthYear = 1991;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// // type conversion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number("jonas"));
// console.log(typeof NaN);

// // type Coercion
// console.log("I am" + 20 + " years old");
// console.log("23" - 20 - "3");

// falsy values: 0 , '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log();
// console.log();

// const age = 18;
// const age = Number(prompt("number: 18"));
// if (age === 18) {
//   console.log("Just became adult (strict)");
// } else if (age === 17) console.log("de menor");
// else if (age == 18) console.log("Just became adult (loose)");

// const a = true;
// const b = false;
// // and
// console.log(a && b);
// // or
// console.log(a || b);
// // not
// console.log(!a);

// switch
// const day = "friday";
// switch (day) {
//   case "monday":
//     console.log(1);
//     break;
//   case "tuesday":
//     console.log(2);
//     break;
//   case "wednesday":
//     console.log(3);
//     break;
//   // assim ele roda o mesmo codigo tanto na quinta quanto na sexta
//   case "thursday":
//   case "friday":
//     console.log(4);
//     break;
//   default:
//     console.log("invalid case");
//     break;
// }

const age = 23;
age >= 18 ? console.log("de maior") : console.log("de menor");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);
console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
