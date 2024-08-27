"use strict";

function getShippingMessage(country, price, deliveryFee) {
  if (
    typeof country === "string" &&
    typeof price === "number" &&
    typeof deliveryFee === "number"
  ) {
    const totalPrice = price + deliveryFee;
    console.log(`Shipping to ${country} will cost ${totalPrice} credits`);
  } else {
    console.log(
      "Please enter valid values for country, price, and deliveryFee."
    );
  }
}

getShippingMessage("Australia", 120, 50);
getShippingMessage("Germany", 80, 20);
getShippingMessage("Sweden", 100, 20);
