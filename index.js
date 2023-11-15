var valorEmDolar = prompt ("Enter your amount:");
var cotacaoDoDolar = prompt ("Enter the exchange rate of the day:");

var valorEmReal = valorEmDolar * cotacaoDoDolar;

valorEmReal = valorEmReal.toFixed(2);

alert("Esse é o valor convertido: R$ " + valorEmReal);
