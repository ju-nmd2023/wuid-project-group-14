const removeButtons = document.querySelectorAll(".remove");
const addButtons = document.querySelectorAll(".add");
const productCounterAmounts = document.querySelectorAll(".product-counter-amount");
const prices = document.querySelectorAll(".cart-product-price");
let subtotal = document.querySelector(".cart-subtotal");
let initialPrices = JSON.parse(localStorage.getItem("initialPrices")) || {};

// set initial prices and set subtotal starting amount by iterating through the amount of products on the cart
for (let i = 0; i < productCounterAmounts.length; i++) {
    // set the product index to be the classname found at index 1 of the product
    const productIndex = productCounterAmounts[i].classList[1];

    // if the array is empty at the given index, add the price found at that index
    if (!initialPrices[productIndex]) {
        initialPrices[productIndex] = parseInt(prices[i].textContent, 10);
    }

    updateSubtotal();
}

// calculates the subtotal shown above the checkout button
function calculateSubtotal() {
    let subtotal = 0;

    for (let i = 0; i < prices.length; i++) {
        subtotal += parseInt(prices[i].textContent, 10);
    }

    return subtotal;
}

// updates the subtotal shown above the checkout button
function updateSubtotal() {
    subtotal.textContent = "Subtotal: " + calculateSubtotal() + " SEK";
}


// change product amount by clicking on the buttons
function changeAmount(amountToChange, productIndex, i) {
    // select the product counter to update and define the current amount of products
    const productCounterAmount = document.querySelector(`.product-counter-amount.${productIndex}`);
    let amount = parseInt(productCounterAmount.value, 10);

    // add one product to the counter and update the total price
    if (amountToChange === 1) {
        let newPrice = (amount + 1) * initialPrices[productIndex];
        productCounterAmount.value = amount + 1;
        prices[i].textContent = newPrice + " SEK";
    }

    // remove one product from the counter and update the total price
    if (amountToChange === -1) {
        if (amount > 0) {
            let newPrice = (amount - 1) * initialPrices[productIndex];
            productCounterAmount.value = amount - 1;
            prices[i].textContent = newPrice + " SEK";
        } else { // prevents a negative amount of products
            productCounterAmount.value = 1;
            prices[i].textContent = initialPrices[productIndex] + " SEK";
        }
    }

    updateSubtotal();
}

// change product amount by user input
for (let i = 0; i < productCounterAmounts.length; i++) {
    // adds an input event listener to all the product-counter objects
    productCounterAmounts[i].addEventListener("input", function() {
        // set the product index of the current object to be the classname found at index 1 of the product
        const productIndex = this.classList[1];
        // select the product counter to update and define the current amount of products
        const productCounterAmount = document.querySelector(`.product-counter-amount.${productIndex}`);
        let amount = parseInt(productCounterAmount.value, 10);

        // prevent the price from displaying a NaN value and update the total
        if (isNaN(amount)) {
            prices[i].textContent = "0 SEK";
        } else if (amount < 0) {
            productCounterAmount.value = 0;
            prices[i].textContent = "0 SEK";
        } else {
            let newPrice = amount * initialPrices[productIndex];
            prices[i].textContent = newPrice + " SEK";
        }

        updateSubtotal();
    });
}

for (let i = 0; i < addButtons.length; i++) {
    // adds a click event listener to all the the add-button objects
    addButtons[i].addEventListener("click", function() {
        const productIndex = this.classList[1];
        changeAmount(1, productIndex, i);
    });
}

for (let i = 0; i < removeButtons.length; i++) {
    // adds a click event listener to all the the remove-button objects
    removeButtons[i].addEventListener("click", function() {
        const productIndex = this.classList[1];
        changeAmount(-1, productIndex, i);
    });
}

// how to create a product counter: https://codepen.io/stack-findover/pen/OJReWrK