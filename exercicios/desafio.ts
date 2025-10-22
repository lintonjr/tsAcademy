export interface Produto {
  id: number;
  nome: string;
  preco: number;
  categoria?: string;
}

class Cliente {
  constructor(private nome: string, private email: string, private saldo: number = 0) {}
  getNome(): string { return this.nome; }
  depositar(valor: number): void {
    if (valor <= 0) throw new Error('Valor inválido para depósito.');
    this.saldo += valor;
  }
  tentarDebitar(valor: number): boolean {
    if (valor <= this.saldo) { this.saldo -= valor; return true; }
    return false;
  }
  exibirSaldo(): void { console.log(`Saldo de ${this.nome}: R$ ${this.saldo.toFixed(2)}`); }
}

function formatBRL(v: number): string {
  return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export function realizarCompra(cliente: Cliente, produtos: Produto[]): string {
  const quantidade = produtos.length;
  const total = produtos.reduce((s, p) => s + p.preco, 0);
  const debitou = cliente.tentarDebitar(total);
  const msgBase = `Cliente ${cliente.getNome()} comprou ${quantidade} produto(s) por ${formatBRL(total)}.`;
  return debitou ? `${msgBase} Pagamento aprovado.` : `${msgBase} Pagamento pendente (saldo insuficiente).`;
}

// teste
const cliente = new Cliente('Linton', 'linton@email.com', 50);
const compras: Produto[] = [
  { id: 1, nome: 'Magic Booster', preco: 25.0, categoria: 'Magic' },
  { id: 2, nome: 'Pokémon Booster', preco: 22.5, categoria: 'Pokémon' }
];
cliente.exibirSaldo();
console.log(realizarCompra(cliente, compras));
cliente.exibirSaldo();
