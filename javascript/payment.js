const creditCardButton = document.getElementById("credit-card-button");
const googlePayButton = document.getElementById("google-pay-button");
const applePayButton = document.getElementById("apple-pay-button");

// change the background color of the credit-car-button when clicked
creditCardButton.addEventListener("click", function () {
  creditCardButton.style.backgroundColor = "#616161";
  applePayButton.style.backgroundColor = "#f7f7f7";
  googlePayButton.style.backgroundColor = "#f7f7f7";
});

// change the background color of the google-pay-button when clicked
googlePayButton.addEventListener("click", function () {
  creditCardButton.style.backgroundColor = "#f7f7f7";
  googlePayButton.style.backgroundColor = "#616161";
  applePayButton.style.backgroundColor = "#f7f7f7";
});

// change the background color of the apple-pay-button when clicked
applePayButton.addEventListener("click", function () {
  applePayButton.style.backgroundColor = "#616161";
  creditCardButton.style.backgroundColor = "#f7f7f7";
  googlePayButton.style.backgroundColor = "#f7f7f7";
});
