import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reenvio-senha',
  imports: [FormsModule, CommonModule],
  templateUrl: './reenvio-senha.html',
  styleUrl: './reenvio-senha.css',
})
export class ReenvioSenha {
  novaSenha: string = '';
  copiaSenha: string = '';
  mensagem: string = '';
  constructor(private router: Router) {}

  public salvar() {
    if (this.copiaSenha.length == 0 || this.novaSenha.length == 0) {
      this.mensagem = 'Um dos campos de senha não foi informado.';
    } else if (this.novaSenha == this.copiaSenha) {
      this.router.navigate(['/login']);
    } else {
      this.mensagem = 'As senhas não são iguais.';
    }
  }
}
