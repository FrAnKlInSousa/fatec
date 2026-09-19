import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Cesta } from '../model/cesta';

@Component({
  selector: 'app-cesta-compra',
  imports: [CommonModule],
  templateUrl: './cesta-compra.html',
  styleUrl: './cesta-compra.css',
})
export class CestaCompra {
  cesta: Cesta = {
    codigo: 1,
    itens: [
      {
        produto: {
          codigo: 1,
          nome: 'Martelo Unha 27mm',
          descritivo: 'Martelo com cabo de madeira e cabeça em aço forjado.',
          valor: 49.90,
          valorPromo: 39.90,
          quantidade: 25,
          destaque: 1
        },
        quantidade: 2,
        subtotal: 79.80
      },
      {
        produto: {
          codigo: 4,
          nome: 'Alicate Universal 8 Polegadas',
          descritivo: 'Alicate universal em aço carbono com cabo emborrachado.',
          valor: 39.90,
          valorPromo: 34.90,
          quantidade: 30,
          destaque: 1
        },
        quantidade: 1,
        subtotal: 34.90
      },
      {
        produto: {
          codigo: 5,
          nome: 'Trena 5 Metros',
          descritivo: 'Trena com fita metálica de 5 metros.',
          valor: 29.90,
          valorPromo: 24.90,
          quantidade: 50,
          destaque: 1
        },
        quantidade: 3,
        subtotal: 74.70
      }
    ],
    total: 189.40
  };
}
