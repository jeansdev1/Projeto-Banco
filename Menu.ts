import readlinesync = require('readline-sync');
import { colors } from './src/util/Colors';
import { Conta } from './src/model/Conta';
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';

export function main() {

    let opcao: number;
    // Objeto da Classe Conta (Teste)
    const conta: Conta = new Conta(1, 123, 1, "Adriana", 10000);
    conta.visualizar();
    conta.sacar(10500);
    conta.visualizar();
    conta.depositar(5000);
    conta.visualizar();

    // Objeto da Classe ContaCorrente (Teste)
    const contacorrente: ContaCorrente = new ContaCorrente(2, 123, 1, "Mariana", 15000, 1000);
    contacorrente.visualizar();
    contacorrente.sacar(2000);
    contacorrente.visualizar();
    contacorrente.depositar(1000);
    contacorrente.visualizar();

    // Objeto da Classe ContaPoupanca (teste)
    const contapoupanca: ContaPoupanca = new ContaPoupanca(3, 123, 2, "Victor", 1000, 10);
    contapoupanca.visualizar();
    contapoupanca.sacar(200);
    contapoupanca.visualizar();
    contapoupanca.depositar(1000);
    contapoupanca.visualizar();

    
    while (true) {
        console.log(colors.fg.magentastrong)
        console.log('*****************************************************');
        console.log(`                                                    |
                       _=,_                         |
                    o_/6 /#\\                        |
                    \\__ |##/                        |
                    ='|-- \                          |
                    /   #'-.                        |
                    \#|_   _'-. /                    |
                        |/ \_( # |"                  |
                    C/,--___/                       |
                                                     `)
        console.log('*****************************************************');
        console.log('                                                     ');
        console.log('                    Dog Bank Corp.                   ');
        console.log('                                                     ');
        console.log('*****************************************************');
        console.log('                                                     ');
        console.log('               1 - Cadastrar Nova Conta              ');
        console.log('               2 - Listar Todas as Contas            ');
        console.log('               3 - Buscar contas por número          ');
        console.log('               4 - Atualizar Dados Cadastrais        ');
        console.log('               5 - Deletar Conta                     ');
        console.log('               6 - Sacar                             ');
        console.log('               7 - Depositar                         ');
        console.log('               8 - Transferir valores entre contas   ');
        console.log('               9 - Sair                              ');
        console.log('                                                     ');
        console.log('*****************************************************');
        console.log('                                                     ');
        console.log(colors.reset);

        console.log('Entre com a opção desejada: ');
        opcao = readlinesync.questionInt('');

        if (opcao == 9) {
            console.log('\n Dog Bank Corp. - Mais que um Banco, seu melhor amigo! ');
            sobre();
            process.exit(0)
        }
        switch (opcao) {
            case 1:
                console.log("\n\nCadastrar Nova Conta\n\n");

                break;
            case 2:
                console.log("\n\nListar todas as Contas\n\n");

                break;
            case 3:
                console.log("\n\nBuscar Contas - por número\n\n");

                break;
            case 4:
                console.log("\n\nAtualizar dados cadastrais\n\n");

                break;
            case 5:
                console.log("\n\nDeletar Conta\n\n");

                break;
            case 6:
                console.log("\n\nSaque\n\n");

                break;
            case 7:
                console.log("\n\nDepósito\n\n");

                break;
            case 8:
                console.log("\n\nTransferência entre Contas\n\n");

                break;
            default:
                console.log("\nOpção Inválida!\n");

                break;
        }
    }

}
export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Jean Andre");
    console.log("Email - jeanv_lima@outlook.com");
    console.log("https://github.com/jeansdev1");
    console.log("Fique a vontade para contribuir com o Projeto");
    console.log("*****************************************************");
}

main();