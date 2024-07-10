import readlinesync = require('readline-sync');
import { colors } from './src/util/Colors';
import { Conta } from './src/model/Conta';
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';
import { ContaController } from './src/controller/ContaController';

export function main() {
    let opcao: number, agencia, tipoConta, saldo, limite, aniversario: number;
    let titular: string;
    const tipoContas = ['Conta corrente', 'Conta Poupanca'];

    const contas: ContaController = new ContaController();
    
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
        
        console.log('Entre com a opção desejada: ');
        opcao = readlinesync.questionInt('');
        
        if (opcao == 9) {
            console.log('\n Dog Bank Corp. - Mais que um Banco, seu melhor amigo! ');
            sobre();
            console.log(colors.reset);
            process.exit(0)
        }
        switch (opcao) {
            case 1:
              console.log(colors.fg.whitestrong);
              console.log("\n\nCriar Conta\n\n", colors.reset);
              console.log("Digite o Numero da Agência: ");
              agencia = readlinesync.questionInt("");
      
              console.log("Digite o Nome do Titular da Conta: ");
              titular = readlinesync.question("");
      
              console.log("Digite o Tipo da Conta: ");
              tipoConta = readlinesync.keyInSelect(tipoContas, "", { cancel: false }) + 1;
      
              console.log("Digite o Saldo da Conta: ");
              saldo = readlinesync.questionFloat("");
      
              switch (tipoConta) {
                case 1:
                  console.log("Digite o Limite da Conta: ");
                  limite = readlinesync.questionFloat("");
                  contas.cadastrar(new ContaCorrente(contas.gerarNumero(), agencia, tipoConta, titular, saldo, limite));
                  break;
                case 2:
                  console.log("Digite a Data de Aniversário da Conta: ");
                  aniversario = readlinesync.questionInt("");
                  contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, tipoConta, titular, saldo, aniversario));
                  break;
              }
      
              keyPress();
              break;
            case 2:
              console.log(colors.fg.whitestrong);
              console.log("\n\nListar todas as Contas\n\n", colors.reset);
              contas.listarTodas();
              keyPress();
              break;
            case 3:
              console.log(colors.fg.whitestrong);
              console.log("\n\nConsultar dados da Conta - por número\n\n", colors.reset);
      
              console.log("Digite o Número da Conta: ");
              let numero = readlinesync.questionInt("");
      
              contas.procurarPorNumero(numero);
      
              keyPress();
              break;
            case 4:
              console.log(colors.fg.whitestrong);
              console.log("\n\nAtualizar dados da Conta\n\n", colors.reset);
              keyPress();
              break;
            case 5:
              console.log(colors.fg.whitestrong);
              console.log("\n\nApagar uma Conta\n\n", colors.reset);
              keyPress();
              break;
            case 6:
              console.log(colors.fg.whitestrong);
              console.log("\n\nSaque\n\n", colors.reset);
              keyPress();
              break;
            case 7:
              console.log(colors.fg.whitestrong);
              console.log("\n\nDepósito\n\n", colors.reset);
              keyPress();
              break;
            case 8:
              console.log(colors.fg.whitestrong);
              console.log("\n\nTransferência entre Contas\n\n", colors.reset);
              keyPress();
              break;
            default:
              console.log("\nOpção Inválida!\n");
              keyPress();
              break;
          }
        }
      }
      
      /* Função com os dados da pessoa desenvolvedora */
      
      export function sobre(): void {
        console.log("\n*****************************************************");
        console.log("Projeto Desenvolvido por: Jeansdev1");
        console.log("Jean Andre - jeanv_lima@outlook.com");
        console.log("github.com/jeansdev1/Projeto-Banco");
        console.log("*****************************************************");
      }
      
      function keyPress(): void {
        console.log(colors.reset, "");
        console.log("\nPressione enter para continuar...");
        readlinesync.prompt();
      }
      
      main();