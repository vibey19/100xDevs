function calculate() {
    var principal = parseFloat(document.getElementById('capital').value);
    var rate = parseFloat(document.getElementById('interest').value);
    var time = parseInt(document.getElementById('years').value);

    var simpleInterest =  principal + (principal * rate * time) / 100;

    document.getElementById('result').innerText = simpleInterest.toFixed(2);
}
