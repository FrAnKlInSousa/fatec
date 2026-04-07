import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../models/produto';
import { ItemCesta } from '../models/item-cesta';

@Component({
  selector: 'app-cesta',
  imports: [CommonModule],
  templateUrl: './cesta.html',
  styleUrl: './cesta.css',
})
export class Cesta {
  mensagem: string = '';
  lista: ItemCesta[] = [];
  total: number = 0;

  ngOnInit(){
    let json = localStorage.getItem('cesta')
    if (json != null){
      this.lista = JSON.parse(json);
      this.calculaTotal();
    }else{
      this.mensagem = 'Sua cesta está vazia!'
    }
  }

  calculaTotal(){
    this.total = 0;
    for(let obj of this.lista){
      this.total = this.total + obj.valor
    }
  }
}
