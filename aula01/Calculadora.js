// Importando biblioteca
const leia = require('readline-sync');


//variaveis
let celsius, fahrenheit

//entrada de dados 
celsius = leia.questionFloat("Insira a temperatura em Celsius: ")

//processamento
fahrenheit = celsius * 1.8 + 32

//saída de dados 
console.log("A temperatura em Fahrenheit é: " + fahrenheit)
console.log("A temperatura em Fahrenheit é: %f", fahrenheit)