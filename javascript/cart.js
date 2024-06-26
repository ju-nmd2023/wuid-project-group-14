const cart = document.querySelector(".modal-container");
const overlay = document.querySelector(".overlay");
const cartButton = document.querySelector(".cart-button");
const closeCartButton = document.querySelector(".close-cart-button");
const optionButton1 = document.querySelector(".product-option-button1");
const optionButton2 = document.querySelector(".product-option-button2");
const optionButton3 = document.querySelector(".product-option-button3");

// activates the cart and the screen overlay
const addToCart = function () {
  cart.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// event listener on click for the add-to-cart button
cartButton.addEventListener("click", addToCart);

// activates the option selected by the user (adds and removes the active-option class)
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

// event listener on click for the product options available
optionButton1.addEventListener("click", function () {
  chooseOption(1);
});
optionButton2.addEventListener("click", function () {
  chooseOption(2);
});
optionButton3.addEventListener("click", function () {
  chooseOption(3);
});

// hides the cart and the screen overlay
const closeCart = function () {
  cart.classList.add("hidden");
  overlay.classList.add("hidden");
};


// event listener on click for the close-cart button
closeCartButton.addEventListener("click", closeCart);

// event listener on keydown for the escape key
document.addEventListener("keydown", function (keydown) {
  if (keydown.key === "Escape" && !cart.classList.contains("hidden")) {
    closeCart();
  }
});

// modal tutorial: https://www.freecodecamp.org/news/how-to-build-a-modal-with-javascript/