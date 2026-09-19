import { Produto } from "./produto";

export class ItemCesta {
  produto: Produto;
  quantidade: number;

  constructor(produto: Produto, quantidade: number){
    this.produto = produto;
    this.quantidade = quantidade;
  }

  get subtotal(): number{
    return this.produto.valorPromo * this.quantidade;
  }
}
