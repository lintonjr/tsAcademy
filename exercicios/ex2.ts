export interface Produto {
  id: number;
  nome: string;
  preco: number;
  categoria?: string;
}

const produtos: Produto[] = [
  { id: 1, nome: 'Magic Booster', preco: 25.0, categoria: 'Magic' },
  { id: 2, nome: 'Pokémon Booster', preco: 22.5, categoria: 'Pokémon' },
  { id: 3, nome: 'One Piece Deck', preco: 45.0, categoria: 'One Piece' },
];

export function listarProdutos(lista: Produto[]): void {
  lista.forEach(p =>
    console.log(`#${p.id} - ${p.nome} | R$ ${p.preco.toFixed(2)}${p.categoria ? ' | ' + p.categoria : ''}`)
  );
}

listarProdutos(produtos);
