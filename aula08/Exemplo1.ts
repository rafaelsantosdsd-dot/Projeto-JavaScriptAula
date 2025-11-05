//~import { Stack } from "../aula07/Stack";

// const pilha = new Stack<string>()

// pilha.push("")

//DECLARANDO A FUNÇÃO
export function somar(a: number, b: number): number{
    // Lógica da função

    let resultado: number = a + b 

    return resultado
}

export function logar(usuario: number | string): void{
    if (typeof(usuario) === "number" )
        console.log("\nVocê está acessando pelo celular");
    else
        console.log("\nVocê está acessando pelo e-mail");
}

//CHAMANDO A FUNÇÃO
let valor: number = somar(7, 12)
let valor1: number = somar(6,11)

console.log("O resultado da sua adição é: "+valor)
console.log("O resultado da sua adição é: "+valor1)

logar("Roberta@generation")