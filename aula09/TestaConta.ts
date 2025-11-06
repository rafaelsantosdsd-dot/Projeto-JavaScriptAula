import { Conta } from "./Conta"

export function main(){
    
    //INSTANCIA DA CLASSE CONTA
    //INSTANCIAMENTO DE UM OBJETO

    const conta1: Conta = new Conta(12156, 108, 1, "Michelle", 1000000)

    console.log("Titular da conta: " + conta1.titular)

    conta1.saldo = 150000000

    console.log("Saldo da conta: " + conta1.saldo)

}

main()