import type { Produto } from './types';

const carrinho: Produto[] = [];

export function adicionarProduto(produto: Produto): void {
  carrinho.push(produto);
}

export function calcularTotal(): number {
  return carrinho.reduce((soma, p) => soma + p.preco, 0);
}

export function listarCarrinho(): Produto[] {
  return [...carrinho];
}

export function limparCarrinho(): void {
  carrinho.length = 0;
}
