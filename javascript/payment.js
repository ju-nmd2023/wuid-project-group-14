const creditCardButton = document.getElementById("credit-card-button");
const googlePayButton = document.getElementById("google-pay-button");
const applePayButton = document.getElementById("apple-pay-button");

creditCardButton.addEventListener("click", function () {
  creditCardButton.style.backgroundColor = "#616161";
  applePayButton.style.backgroundColor = "#f7f7f7";
  googlePayButton.style.backgroundColor = "#f7f7f7";
});

googlePayButton.addEventListener("click", function () {
  creditCardButton.style.backgroundColor = "#f7f7f7";
  googlePayButton.style.backgroundColor = "#616161";
  applePayButton.style.backgroundColor = "#f7f7f7";
});

applePayButton.addEventListener("click", function () {
  applePayButton.style.backgroundColor = "#616161";
  creditCardButton.style.backgroundColor = "#f7f7f7";
  googlePayButton.style.backgroundColor = "#f7f7f7";
});
