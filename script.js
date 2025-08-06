const calButton = document.getElementById("calculate")
const billInput = document.getElementById("bill")
const tipInput = document.getElementById("tip")
const totalSpan = document.getElementById("total");

function calculateTotal() {
    // Testing button
    // console.log("clicked");

    const billValue = billInput.value;
    const tipValue = tipInput.value;
    const totalValue = billValue * (1 + tipValue/100);

    // Tofixed shows the only two places after decimal -- like 1.12, 2.56
    totalSpan.innerText = "$" + totalValue.toFixed(2);
}

calButton.addEventListener("click", calculateTotal)