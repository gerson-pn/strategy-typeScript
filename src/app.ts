import promptSync from "prompt-sync";
import Cliente from "./cliente";
import Estrategia from "./estrategia";
import EstrategiaA from "./estrategiaA";
import EstrategiaB from "./estrategiaB";

console.log(`Padrão strategy (estratégia)`)

let prompt = promptSync();
let opcao: string
let execucao = true
let cliente = new Cliente()
let estrategia: Estrategia


while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Estrategia A`);
    console.log(`2 - Estrategia B`);
    console.log(`0 - Sair`);

    opcao = prompt(`escolha uma das opções: `)

    switch (opcao) {
        case '1':
            estrategia = new EstrategiaA()
            cliente.processarEstrategia = estrategia
            break;
        case '2':
            estrategia = new EstrategiaB()
            cliente.processarEstrategia = estrategia
            break;
        case '0':
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}