import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Chamado } from '../models/chamado';

@Component({
  selector: 'app-cadastro-chamado',
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro-chamado.html',
  styleUrl: './cadastro-chamado.css',
})
export class CadastroChamado {
  codigo: number | null = null;
  assunto: string = '';
  prioridade: string = '';
  detalhes: string = '';

  gravarChamado() {
    const chamado = new Chamado(this.codigo ?? 0, this.assunto, this.prioridade, this.detalhes);
    localStorage.setItem('cadastro', JSON.stringify(chamado));
    location.href = '';
  }
}
