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
  public nome: string = '';
  public email: string = '';
  public assunto: string = '';
  public telefone: string = '';
  public mensagem: string = '';
  public texto: string = '';

  public obj: Cliente = new Cliente();
  public enviar() {
    this.mensagem = 'Email enviado com sucesso.';
    let data = `Email: ${this.email}, Assunto: ${this.assunto}, Mensagem: ${this.mensagem}`;

    this.obj.nome = this.nome;
    this.obj.email = this.email;
    this.obj.telefone = this.telefone;
    localStorage.setItem('mensagem', data);
    localStorage.setItem('cliente', JSON.stringify(this.obj));
  }
}
