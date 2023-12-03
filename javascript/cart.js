const cart = document.querySelector(".modal-container");
const overlay = document.querySelector(".overlay");
const cartButton = document.querySelector(".cart-button");
const closeCartButton = document.querySelector(".close-cart-button");
const optionButton1 = document.querySelector(".product-option-button1");
const optionButton2 = document.querySelector(".product-option-button2");
const optionButton3 = document.querySelector(".product-option-button3");

const addToCart = function () {
  cart.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

cartButton.addEventListener("click", addToCart);

const chooseOption = function (option) {
  if (option === 1) {
    optionButton1.classList.add("active-option");
    optionButton2.classList.remove("active-option");
    optionButton3.classList.remove("active-option");
  } else if (option === 2) {
    optionButton1.classList.remove("active-option");
    optionButton2.classList.add("active-option");
    optionButton3.classList.remove("active-option");
  } else {
    optionButton1.classList.remove("active-option");
    optionButton2.classList.remove("active-option");
    optionButton3.classList.add("active-option");
  }
};

optionButton1.addEventListener("click", function () {
  chooseOption(1);
});
optionButton2.addEventListener("click", function () {
  chooseOption(2);
});
optionButton3.addEventListener("click", function () {
  chooseOption(3);
});

const closeCart = function () {
  cart.classList.add("hidden");
  overlay.classList.add("hidden");
};

closeCartButton.addEventListener("click", closeCart);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !cart.classList.contains("hidden")) {
    closeCart();
  }
});
