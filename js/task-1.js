"use strict";

function makeTransaction(quantity, pricePerDroid) {
  if (typeof quantity === "number" && typeof pricePerDroid === "number") {
    console.log(
      `You ordered ${quantity} droids worth ${
        pricePerDroid * quantity
      } credits!`
    );
  } else {
    console.log("Please enter a number for both quantity and pricePerDroid.");
  }
}

makeTransaction(5, 3000);
makeTransaction(3, 1000);
makeTransaction(10, 500);
