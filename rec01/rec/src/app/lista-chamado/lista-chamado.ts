import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chamado } from '../models/chamado';

@Component({
  selector: 'app-lista-chamado',
  imports: [CommonModule],
  templateUrl: './lista-chamado.html',
  styleUrl: './lista-chamado.css',
})
export class ListaChamado {
  lista: Chamado[] = [];

  ngOnInit() {
    this.listarChamados();
  }

  listarChamados() {
    const chamados = localStorage.getItem('chamados');

    if (chamados) {
      this.lista = JSON.parse(chamados);
    }
  }
}
