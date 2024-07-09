export abstract class Conta {
    // Definir os atributos da classe (caracteristicas do meu objeto)
    private _numero: number;
    private _agencia: number;
    private _tipo: number;
    private _titular: string;
    private _saldo: number;

    // Definimos o metodo construtor, responsavel por criar os objetos da Classe

    constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number) {
        this._numero = numero;
        this._agencia = agencia;
        this._tipo = tipo;
        this._titular = titular;
        this._saldo = saldo;
    }

    public get numero(): number {
        return this._numero;
    }

    public get agencia(): number {
        return this._agencia;
    }

    public get tipo(): number {
        return this._tipo;
    }

    public get titular(): string {
        return this._titular;
    }

    public get saldo(): number {
        return this._saldo;
    }

    public set numero(value: number) {
        this._numero = value;
    }

    public set agencia(value: number) {
        this._agencia = value;
    }

    public set tipo(value: number) {
        this._tipo = value;
    }
    public set titular(value: string) {
        this._titular = value;
    }

    public set saldo(value: number) {
        this._saldo = value;
    }


    // metodo sacar dinheiro da conta
    public sacar(valor: number): boolean {
        if (this._saldo < valor) {
            console.log('Saldo Insuficiente! ')
            return false;
        }
        this._saldo = this._saldo - valor;
        return true;
    }
    // metdodo Depositar

    public depositar(valor: number): void{
        this._saldo = this._saldo + valor;
    }


    // metodo para vizualizar todos os dados

    public visualizar(): void {

        let tipoConta: string = ''
        switch (this._tipo) {
            case 1:
                tipoConta = 'Conta corrente'
                break;
            case 2:
                tipoConta = 'Conta Poupanca'
                break;
        }


        console.log('\n **************************************');
        console.log('\n Dados da Conta ');
        console.log('\n **************************************');
        console.log(`Numero da Conta: ${this._numero} `);
        console.log(`Numero da Agencia: ${this._agencia} `);
        console.log(`Tipo da Conta: ${tipoConta} `);
        console.log(`Titular da Conta: ${this._titular} `);
        console.log(`Saldo da Conta: ${this._saldo.toFixed(2)} `);

    }
}

