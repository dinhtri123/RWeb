document.addEventListener('DOMContentLoaded', function() {
  const amountField = document.querySelector("#amount-field");
  const estField = document.querySelector("#estimation-field");
  const bitcoinPrice = 108143.18;
  amountField.addEventListener('input', function() {
    let value = parseFloat(amountField.value);
    if (isNaN(value) || value <= 0) {
      estField.value = 0;
    } else {
      let bitcoinAmount = value / bitcoinPrice; 
      estField.value = bitcoinAmount.toFixed(8)
    }
  })
})