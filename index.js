document.getElementById('calculator-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const productPrice = parseFloat(document.getElementById('product-price').value);
    const amountGiven = parseFloat(document.getElementById('amount-given').value);
    
    const change = amountGiven - productPrice;
    
    document.getElementById('total-amount').textContent = productPrice.toFixed(2);
    document.getElementById('change-amount').textContent = change.toFixed(2);
    
    document.getElementById('total-result').style.display = 'block';
    document.getElementById('change-result').style.display = 'block';
});
