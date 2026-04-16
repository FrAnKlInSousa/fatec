import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Chamado } from '../models/chamado';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cadastro-chamado',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './cadastro-chamado.html',
  styleUrl: './cadastro-chamado.css',
})
export class CadastroChamado {
  codigo: number | null = null;
  assunto: string = '';
  prioridade: string = '';
  detalhes: string = '';
  lista: Chamado[] = [];

  gravarChamado() {
    let lista: Chamado[] = [];
    let chamados = localStorage.getItem('chamados');

    if (chamados != null) {
      lista = JSON.parse(chamados);
    }
    const chamado = new Chamado(this.codigo ?? 0, this.assunto, this.prioridade, this.detalhes);
    const chamadoExistente = lista.find((item) => item.codigo === this.codigo);
    if (chamadoExistente) {
      chamadoExistente.assunto = this.assunto;
      chamadoExistente.detalhes = this.detalhes;
      chamadoExistente.prioridade = this.prioridade;
    } else {
      lista.push(chamado);
    }

    localStorage.setItem('chamados', JSON.stringify(lista));
    location.href = '';
  }
}
