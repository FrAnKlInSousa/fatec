import { ItemCesta } from "./item-cesta";

export class Cesta {

  codigo: number;
  itens: ItemCesta[];

  constructor(codigo: number, itens: ItemCesta[]){
    this.codigo = codigo;
    this.itens = itens;
  }

  get total(): number {
    return this.itens.reduce(
      (total, item) => total + item.subtotal, 0
    );
  }
}
