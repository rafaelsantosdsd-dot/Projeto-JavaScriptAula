// Importando biblioteca
const leia = require('readline-sync');

//Declarando variaveis
let nome, distancia


//entrada de dados 
console.log("Digite seu nome: ")
nome = leia.question()

console.log("\nDigite a distância percorrida em sua corrida: ")
distancia = leia.questionFloat()

//saída de dados
console.log("\nBom dia, " + nome)
console.log("\nA distância percorrida foi de: " + distancia)


