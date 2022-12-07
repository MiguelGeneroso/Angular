import { Component } from '@angular/core';
import { ServicioUsuarioService } from '../../shared/servicio-usuario.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})

// Modificar el componente registro y hacer la funcionalidad "registrarse", haciendo uso del servicio
// usuarioService.

// IMPORTANTE. Antes de registrar a un usuario comprobar que ambas contraseñas coincidan, sino
// coinciden notificarlo por consola.
export class FormularioRegistroComponent {

  constructor(private apiService : ServicioUsuarioService){

  }

  public insertUsuario(nombre : HTMLInputElement,apellidos : HTMLInputElement, correo : HTMLInputElement, foto : HTMLInputElement, pass : HTMLInputElement, confirmPassword : HTMLInputElement){

    if (pass.value == confirmPassword.value){
      
      this.apiService.register(this.apiService.usuario = new Usuario(0,nombre.value,apellidos.value,correo.value,foto.value,pass.value))
      .subscribe(function (data){
        console.log(data);
        
      })

    }else{

      console.log("ERROR: LAS CONTRASEÑAS NO COINCIDEN");
      
    }
  }

  // public selectUsuario(nombre : HTMLInputElement,apellidos : HTMLInputElement, correo : HTMLInputElement, foto : HTMLInputElement, pass : HTMLInputElement){
  
  //   this.apiService.login(this.apiService.usuario = new Usuario(0,nombre.value,apellidos.value,correo.value,foto.value,pass.value))
  //   .subscribe(function (data){
  //     console.log(data);
      
  //   })
  // }
}
