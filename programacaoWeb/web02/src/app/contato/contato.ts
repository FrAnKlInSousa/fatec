import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-contato',
  imports: [FormsModule, CommonModule],
  templateUrl: './contato.html',
  styleUrl: './contato.css',
})
export class Contato {
  public nome: string = '';
  public email: string = '';
  public telefone: string = '';
  public assunto: string = 'pedidos';
  public mensagem: string = '';
  public copia: boolean = false;
  public texto: string = '';

  public obj: Cliente = new Cliente();

  public enviar() {
    this.mensagem = 'mensagem enviada com sucesso.';
    let data = `nome: ${this.nome},
                email: ${this.email},
                telefone: ${this.telefone},
                assunto: ${this.assunto},
                mensagem: ${this.texto},
                copia: ${this.copia},
                `;
    localStorage.setItem('data', data);
    this.obj.email = this.email;
    this.obj.nome = this.nome;
    this.obj.telefone = this.telefone;
    localStorage.setItem('cliente', JSON.stringify(this.obj));
  }
}
