import { Conta } from "./Conta";

export class ContaPoupanca extends Conta{

    private _aniverssario: number;


	constructor(numero: number,agencia: number, tipo: number, titular: string, saldo: number, aniverssario: number) {
        super(numero, agencia,tipo,titular,saldo);
		this._aniverssario = aniverssario;
	}

	public get aniverssario(): number {
		return this._aniverssario;
	}
	public set aniverssario(value: number) {
		this._aniverssario = value;
	}
    public visualizar(): void {
    super.visualizar();
    console.log('Dia do aniverssario ' + this.aniverssario);
    
    }

}