function getElementWidth(content, padding, border) {
  if (
    typeof content === "string" &&
    content.endsWith("px") &&
    typeof padding === "string" &&
    padding.endsWith("px") &&
    typeof border === "string" &&
    border.endsWith("px")
  ) {
    console.log(
      parseFloat(content) + 2 * parseFloat(padding) + 2 * parseFloat(border)
    );
  } else {
    console.log(
      "Please enter valid values for country, price, and deliveryFee."
    );
  }
}

getElementWidth("50px", "8px", "4px");
getElementWidth("60px", "12px", "8.5px");
getElementWidth("200px", "0px", "0px");
