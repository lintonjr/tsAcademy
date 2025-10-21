# 📘 Aula Completa de TypeScript


### Bloco 1 — Introdução ao TypeScript
**Conceitos-chave**
- TypeScript é um **superset** do JavaScript que adiciona **tipagem estática**.
- **Transpilação**: TS → JS (executado pelo Node ou no navegador).
- Vantagens: **autocompletar**, **menos bugs**, **refatoração segura**.

**Demonstração rápida**
```bash
npm install -g typescript
tsc --version
```
```ts
function soma(a: number, b: number) { return a + b; }
console.log(soma(2, 3));
// soma('2', 3) // erro de compilação
```

---

### Bloco 2 — Tipos e Inferência
**Conteúdo**
- Primitivos: `string`, `number`, `boolean`, `null`, `undefined`.
- Especiais: `any` (evite), `unknown`, `void`, `never`.
- **Inferência** vs tipagem explícita.
- `type` e **union types**.

**Exemplos**
```ts
let nome: string = 'Linton';
let idade = 30;        // inferido number
let ativo: boolean = true;
type Status = 'ativo' | 'inativo';
let status: Status = 'ativo';
```

---

### Bloco 3 — Objetos, Interfaces e Tipos
**Conteúdo**
- `interface` vs `type`: ambos definem contratos.
- Campos opcionais (`?`) e `readonly`.
- Extensão de interfaces.

**Exemplo**
```ts
interface Usuario {
  id: number;
  nome: string;
  email: string;
  ativo?: boolean;
  readonly criadoEm?: Date;
}

const user: Usuario = { id: 1, nome: 'Ana', email: 'ana@email.com' };
```

---

### Bloco 4 — Classes e Modificadores (25 min)
**Conteúdo**
- `class`, `constructor`, `public`, `private`, `protected`.
- **Herança** (`extends`) e **implementação** de interface (`implements`).

**Exemplo**
```ts
interface Autenticavel { login(): boolean; }

class Usuario implements Autenticavel {
  constructor(private nome: string, private senha: string) {}
  login(): boolean { return this.senha === '1234'; }
}
const u = new Usuario('João', '1234');
console.log(u.login());
```

---

### Bloco 5 — Módulos, Build e Projeto Prático
**Passos**
```bash
mkdir projeto-ts && cd projeto-ts
npm init -y
npm i -D typescript
npx tsc --init
```

**Estrutura**
```
src/
 ├─ models/
 │   └─ user.ts
 ├─ services/
 │   └─ authService.ts
 └─ index.ts
```

**Código**
```ts
// src/models/user.ts
export interface User { id: number; name: string; email: string; active?: boolean; }

// src/services/authService.ts
import { User } from '../models/user';
export function login(user: User): string {
  if (user.active === false) return `Usuário ${user.name} está inativo.`;
  return `Usuário ${user.name} autenticado com sucesso!`;
}

// src/index.ts
import { login } from './services/authService';
import { User } from './models/user';
const user: User = { id: 1, name: 'Linton', email: 'linton@email.com', active: true };
console.log(login(user));
```

**Compilação e execução**
```bash
npx tsc
node dist/index.js
```

---

## 🖼️ Slides

### Slide 1 — **Introdução ao TypeScript**
> Aula prática com fundamentos, tipagem, classes e módulos  

### Slide 2 — **O que é TypeScript**
- Superset do JavaScript  
- Tipagem estática e POO  
- Transpila para JS  
- Erros detectados antes da execução

### Slide 3 — **Por que usar?**
- Autocompletar, manutenção, escalabilidade  
- Redução de bugs  
- Refatoração segura

### Slide 4 — **Instalação**
```bash
npm install -g typescript
tsc --version
npm init -y && npm i -D typescript && npx tsc --init
```

### Slide 5 — **Tipos básicos**
```ts
let nome: string = 'Linton';
let idade: number = 30;
let ativo: boolean = true;
let qualquer: any = 'evite usar';
```

### Slide 6 — **Interfaces**
```ts
interface Usuario { id: number; nome: string; email: string; ativo?: boolean; }
```

### Slide 7 — **Classes**
```ts
class Usuario { constructor(private nome: string, private senha: string) {} }
```

### Slide 8 — **Módulos**
```ts
export function login(nome: string) { console.log(`${nome} logado!`); }
```

### Slide 9 — **Compilação**
```bash
npx tsc && node dist/index.js
```

### Slide 10 — **Resumo**
- Tipagem, interfaces, classes, módulos e build.

---

## 💻 Projeto Base (Starter)

**Arquivos principais**
- `src/models/user.ts` — interface `User`
- `src/services/authService.ts` — função `login(user)`
- `src/index.ts` — ponto de entrada

**tsconfig.json**
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "rootDir": "src",
    "outDir": "dist",
    "strict": true
  }
}
```

**Scripts sugeridos (`package.json`)**
```json
{
  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js",
    "dev": "tsc -w"
  }
}
```

---

## 📝 Folha de Exercícios

### Exercício 1 — Tipos e Variáveis
Crie e exiba:
- `nome: string`, `idade: number`, `ativo: boolean`,  
- `salario: number | null`, `dataCadastro: Date`.

**Solução**
```ts
const nome: string = 'Linton';
const idade: number = 30;
const ativo: boolean = true;
const salario: number | null = 12500.50;
const dataCadastro: Date = new Date('2025-10-21');
console.log({ nome, idade, ativo, salario, dataCadastro });
```

---

### Exercício 2 — Interface Produto + Listagem
Crie `Produto`, uma lista e `listarProdutos`.

**Solução**
```ts
export interface Produto { id: number; nome: string; preco: number; categoria?: string; }

const produtos: Produto[] = [
  { id: 1, nome: 'Magic Booster', preco: 25.0, categoria: 'Magic' },
  { id: 2, nome: 'Pokémon Booster', preco: 22.5, categoria: 'Pokémon' },
  { id: 3, nome: 'One Piece Deck', preco: 45.0, categoria: 'One Piece' }
];

export function listarProdutos(lista: Produto[]): void {
  lista.forEach(p => console.log(`#${p.id} - ${p.nome} | R$ ${p.preco.toFixed(2)}${p.categoria ? ' | ' + p.categoria : ''}`));
}

listarProdutos(produtos);
```

---

### Exercício 3 — Classe Cliente
Implemente `depositar` e `exibirSaldo`.

**Solução**
```ts
class Cliente {
  constructor(private nome: string, private email: string, private saldo: number = 0) {}

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
```

---

### Exercício 4 — Módulo Carrinho
Crie `carrinhoService.ts` e use no `index.ts`.

**Solução**
```ts
// types.ts
export interface Produto { id: number; nome: string; preco: number; categoria?: string; }

// carrinhoService.ts
import type { Produto } from './types';
const carrinho: Produto[] = [];
export function adicionarProduto(produto: Produto): void { carrinho.push(produto); }
export function calcularTotal(): number { return carrinho.reduce((soma, p) => soma + p.preco, 0); }
export function listarCarrinho(): Produto[] { return [...carrinho]; }
export function limparCarrinho(): void { carrinho.length = 0; }

// index.ts
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
```

---

### Exercício 5 — Desafio Final (Compra)
Crie `Produto`, `Cliente` e `realizarCompra`.

**Solução**
```ts
export interface Produto { id: number; nome: string; preco: number; categoria?: string; }

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

function formatBRL(v: number): string { return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); }

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
```

---

## ✅ Boas Práticas Rápidas
- Ative `strict` no `tsconfig.json`.
- Prefira **tipos explícitos** quando houver ambiguidade.
- Evite `any`; prefira `unknown` + *narrowing* quando necessário.
- Use **interfaces** para contratos públicos e **types** para composições/alias/union.

---

## 🧪 Como Rodar os Exemplos/Exercícios
```bash
npm i -D typescript
npx tsc --init
# salve .ts (ex1.ts, ex2.ts, ...) e depois:
npx tsc
node dist/ex1.js
node dist/ex2.js
```

---

## 🚀 Próximos Passos (sugestão)
- Generics (`Array<T>`, funções genéricas).
- Utility Types (`Partial`, `Pick`, `Omit`, `Readonly`).
- Narrowing (type guards), `unknown` e `never`.
- Integração com frameworks (NestJS/Angular/React).

---

## 📎 Recursos Úteis
- Handbook oficial: https://www.typescriptlang.org/docs/handbook/intro.html
- Playground: https://www.typescriptlang.org/play
- TSConfig Reference: https://www.typescriptlang.org/tsconfig

---


