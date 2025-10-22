import { adicionarProduto, calcularTotal, listarCarrinho, limparCarrinho } from './carrinhoService';
import type { Produto } from './types';

const itens: Produto[] = [
  { id: 1, nome: 'Magic Booster', preco: 25.0, categoria: 'Magic' },
  { id: 2, nome: 'Pokémon Booster', preco: 22.5, categoria: 'Pokémon' }
];

limparCarrinho();
itens.forEach(adicionarProduto);

console.log('Carrinho:', listarCarrinho());
console.log('Total:', `R$ ${calcularTotal().toFixed(2)}`);
