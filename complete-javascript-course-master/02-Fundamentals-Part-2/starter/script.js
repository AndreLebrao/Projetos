"use strict";

function logger() {
  console.log("andreu");
}

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const juice = fruitProcessor(2, 5);
console.log(juice);

const num = Number("21");
