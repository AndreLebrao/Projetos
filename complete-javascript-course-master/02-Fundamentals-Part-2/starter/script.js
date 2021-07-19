"use strict";

// function logger() {
//   console.log("andreu");
// }

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// const juice = fruitProcessor(2, 5);
// console.log(juice);

// const num = Number("21");

// // function declaration
// function calcAge1(birthYear){
//   return 2021-birthYear;
// }
// const age1=calcAge1(1995)


// // function expression
// const calcAge2 = function(birthYear){
//   return 2021-birthYear;
// }
// const age2=calcAge1(1995)

// console.log(age1,age2)

// arrow function
// const calcAge3 = birthYear=> 2021-birthYear;
// const age3=calcAge3(1995)
// console.log(age3)

const yearsBeforeRetire = (birthYear,firstName)=>{
  const age = 2021-birthYear;
  const retirement = 65-age;
  return `${firstName} retires in ${retirement} years`
}
console.log(yearsBeforeRetire(1995,'jonas'))