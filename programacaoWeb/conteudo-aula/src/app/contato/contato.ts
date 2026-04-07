import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../models/cliente';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-contato',
  imports: [CommonModule, FormsModule],
  templateUrl: './contato.html',
  styleUrl: './contato.css',
})
export class Contato {
  public mensagem: string = '';
  public assunto: string = '';
  public nome: string = '';
  public telefone: string = '';
  public email: string = '';
  public texto: string = '';
  public copia: string = '';

  public obj: Cliente = new Cliente();

  public enviar() {
    this.mensagem = 'Email enviado com sucesso.';

    let data = `Título: ${this.assunto},
    Nome: ${this.nome}, Email: ${this.email},
    Copia: ${this.copia},
    Telefone: ${this.telefone},
    Texto: ${this.texto}`;

    this.obj.nome = this.nome;
    this.obj.email = this.email;
    this.obj.telefone = this.telefone;

    localStorage.setItem('mensagemContato', data);
    localStorage.setItem('cliente', JSON.stringify(this.obj));
  }
}
