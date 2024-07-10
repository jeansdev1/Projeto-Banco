import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository {
  //Coleção Array que vai armazenar os Objetos Conta
  private listaContas: Array<Conta> = new Array<Conta>();

  // Controlar os números das contas
  public numero: number = 0;

  procurarPorNumero(numero: number): void {
    let buscarConta = this.buscarNoArray(numero);

    if (buscarConta !== null) {
      buscarConta.visualizar();
    } else {
      console.log("\nConta não encontrada!");
    }
  }

  listarTodas(): void {
    for (let conta of this.listaContas) {
      conta.visualizar();
    }
  }

  cadastrar(conta: Conta): void {
    this.listaContas.push(conta);
    console.log("Conta cadastrada com sucesso!");
  }

  atualizar(conta: Conta): void {
      let buscarConta = this.buscarNoArray(conta.numero);

      if(buscarConta !== null){
        this.listaContas[this.listaContas.indexOf(buscarConta)] = conta;
        console.log('\nA conta foi atualizada! ')
      }else
        console.log('\nConta Nao encontrada! ')
      }

  deletar(numero: number): void {
    let buscarConta = this.buscarNoArray(numero);

    if (buscarConta !== null) {
      this.listaContas.splice(this.listaContas.indexOf(buscarConta), 1)
      console.log('A conta foi excluida !')
      buscarConta.visualizar();
  }else 
    console.log('A conta nao foi encontrada! ')
  }


  sacar(numero: number, valor: number): void {
    let buscarConta = this.buscarNoArray(numero);

    if (buscarConta !== null){
      if(buscarConta.sacar(valor) === true)
        console.log('\n O saque foi efetuado com sucesso! ')

    }else{
      console.log('\nA conta nao foi encontrada! ')
    }

  }
  depositar(numero: number, valor: number): void {
    let buscaConta = this.buscarNoArray(numero);
 
    if (buscaConta) {
      buscaConta.depositar(valor);
      console.log("\nDepósito foi efetuado com sucesso!");
    } else {
      console.log("\nA Conta não foi encontrada!");
    }
  }
  transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
    let buscaContaOrigem = this.buscarNoArray(numeroOrigem);
    let buscaContaDestino = this.buscarNoArray(numeroDestino);

    if (buscaContaOrigem !== null && buscaContaDestino !== null){
      if (buscaContaOrigem.sacar(valor) === true){
          buscaContaDestino.depositar(valor);
          console.log('\nA transferencia foi efetuada com sucesso! ')

      }
    }else
      console.log('\n A conta de origem ou destino nao foram encontradas! ')

  }

  //Métdoso auxiliares

  public gerarNumero(): number {
    return ++this.numero;
  }

  public buscarNoArray(numero: number): Conta | null {
    for (let conta of this.listaContas) {
      if (conta.numero === numero) {
        return conta;
      }
    }
    return null;
  }
}