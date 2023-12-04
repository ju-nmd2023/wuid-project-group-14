const removeButtons = document.querySelectorAll(".remove");
const addButtons = document.querySelectorAll(".add");
const productCounterAmounts = document.querySelectorAll(".product-counter-amount");
const prices = document.querySelectorAll(".cart-product-price");
let subtotal = document.querySelector(".cart-subtotal");
let initialPrices = JSON.parse(localStorage.getItem("initialPrices")) || {};

// set initial prices and set subtotal starting amount
for (let i = 0; i < productCounterAmounts.length; i++) {
    const productIndex = productCounterAmounts[i].classList[1];
    if (!initialPrices[productIndex]) {
        initialPrices[productIndex] = parseInt(prices[i].textContent, 10);
    }

    updateSubtotal();
}

function calculateSubtotal() {
    let subtotal = 0;

    for (let i = 0; i < prices.length; i++) {
        subtotal += parseInt(prices[i].textContent, 10);
    }

    return subtotal;
}

function updateSubtotal() {
    subtotal.textContent = "Subtotal: " + calculateSubtotal() + " SEK";
}


// change product amount by clicking on the buttons
function changeAmount(amountToChange, productIndex, i) {
    const productCounterAmount = document.querySelector(`.product-counter-amount.${productIndex}`);
    let amount = parseInt(productCounterAmount.value, 10);

    if (amountToChange === 1) {
        let newPrice = (amount + 1) * initialPrices[productIndex];
        productCounterAmount.value = amount + 1;
        prices[i].textContent = newPrice + " SEK";
    }

    if (amountToChange === -1) {
        if (amount > 0) {
            let newPrice = (amount - 1) * initialPrices[productIndex];
            productCounterAmount.value = amount - 1;
            prices[i].textContent = newPrice + " SEK";
        } else {
            productCounterAmount.value = 1;
            prices[i].textContent = initialPrices[productIndex] + " SEK";
        }
    }

    updateSubtotal();
}

// change product amount by user input
for (let i = 0; i < productCounterAmounts.length; i++) {
    productCounterAmounts[i].addEventListener("input", function() {
        const productIndex = this.classList[1];
        const productCounterAmount = document.querySelector(`.product-counter-amount.${productIndex}`);
        let amount = parseInt(productCounterAmount.value, 10);

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
    addButtons[i].addEventListener("click", function() {
        const productIndex = this.classList[1];
        changeAmount(1, productIndex, i);
    });
}

for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener("click", function() {
        const productIndex = this.classList[1];
        changeAmount(-1, productIndex, i);
    });
}

// how to create a product counter: https://codepen.io/stack-findover/pen/OJReWrK