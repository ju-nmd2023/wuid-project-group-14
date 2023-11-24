const removeButton = document.querySelector(".remove");
const addButton = document.querySelector(".add");
const productCounterAmount = document.querySelector(".product-counter-amount");

productCounterAmount.addEventListener("input", function() {
    if (parseInt(productCounterAmount.value, 10) < 0) {
        productCounterAmount.value = 0;
    }
});

function changeAmount(i){
    if (i === 1) {
        productCounterAmount.value = parseInt(productCounterAmount.value, 10) + 1;
    }

    if (i === -1) {
        if (productCounterAmount.value > 0) {
            productCounterAmount.value = parseInt(productCounterAmount.value, 10) - 1;
        } else {
            productCounterAmount.value = 0;
        }
    }
}

addButton.addEventListener("click", function() {
    changeAmount(1)
})

removeButton.addEventListener("click", function() {
    changeAmount(-1)
})