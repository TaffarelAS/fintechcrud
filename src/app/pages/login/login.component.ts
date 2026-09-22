import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  botaoDesabilitado:boolean = true;
  login:string = 'admin@email.com';
  senha:string = '123';

  validarFormulario(){
    if(this.login.trim() !== "" && this.senha.trim() !== ""){
      this.botaoDesabilitado = false
    }else{
      this.botaoDesabilitado = true
    }
  }

  fazerLogin() {
    if (this.login.trim()=="admin@email.com" && this.senha.trim()=="123") {
      alert("Bem-Vindo admin!")
    } else {
      alert("Credenciais invalidas!")
    }
  }
}
