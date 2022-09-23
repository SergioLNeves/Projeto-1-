import { generation } from "./Banco";
import { BancoDeItens } from "./BancoItens";
import { cliente } from "./Client";
import { Depositos } from "./Depósitos";
import { saque } from "./Saque";

export class inter implements saque,Depositos,BancoDeItens,cliente,generation {
    conta_corrente: number;
    conta_poupanca: number;
    fgts: number;
    agencia: number;
    cnpj: number;
    telefone: string;
    enderecobanco: string;
    contaCorrente: number;
    contaPoupança: number;
    nome: string;
    cpf: string;
    dtnasc: string;
    endereco: string;
    Itens: string[];

    //-------------------------------------------
    saqueCorente(valor: number): void {
        throw new Error("Method not implemented.");
    }
    saquePoupança(valor: number): void {
        throw new Error("Method not implemented.");
    }
    saqueFgts(valor: number): void {
        throw new Error("Method not implemented.");
    }
    verConta(): void {
        throw new Error("Method not implemented.");
    }
    depcorrente(valor: number): void {
        throw new Error("Method not implemented.");
    }
    deppoupança(valor: number): void {
        throw new Error("Method not implemented.");
    }
    transferenciaCorrente(valor: number): void {
        throw new Error("Method not implemented.");
    }
    transferenciapoupanca(valor: number): void {
        throw new Error("Method not implemented.");
    }
    VerItens(): void {
        throw new Error("Method not implemented.");
    }
    RetirarO_UltimoItem(): void {
        throw new Error("Method not implemented.");
    }
    AdicionarMais1Contrato(): void {
        throw new Error("Method not implemented.");
    }
    dadosCliente(): void {
        throw new Error("Method not implemented.");
    }
    verAgencia(): void {
        throw new Error("Method not implemented.");
    }
    verCnpj(): void {
        throw new Error("Method not implemented.");
    }
    verEndereco(): void {
        throw new Error("Method not implemented.");
    }

}