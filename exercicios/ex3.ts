class Cliente {
  constructor(
    private nome: string,
    private email: string,
    private saldo: number = 0
  ) {}

  depositar(valor: number): void {
    if (valor <= 0) throw new Error('Valor inválido para depósito.');
    this.saldo += valor;
  }

  exibirSaldo(): void {
    console.log(`Cliente: ${this.nome} | Saldo: R$ ${this.saldo.toFixed(2)}`);
  }
}

const c1 = new Cliente('Ana', 'ana@email.com', 100);
const c2 = new Cliente('João', 'joao@email.com');
c1.depositar(50);
c2.depositar(200);
c1.exibirSaldo();
c2.exibirSaldo();
