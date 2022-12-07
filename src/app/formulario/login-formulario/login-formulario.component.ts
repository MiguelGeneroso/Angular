import { Component, OnInit } from '@angular/core';
import { ServicioUsuarioService } from '../../shared/servicio-usuario.service';
import { Usuario } from '../../models/usuario';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-login-formulario',
  templateUrl: './login-formulario.component.html',
  styleUrls: ['./login-formulario.component.css']
})
export class LoginFormularioComponent implements OnInit{

  public usuario : Usuario;
  constructor (private apiService : ServicioUsuarioService, private router : Router){

    this.usuario = new Usuario(null,"","","","","");
  }

  public goPlace(){

    this.router.navigateByUrl('/mostrarLibros');
}

  public iniciarSesion(correo : HTMLInputElement, pass : HTMLInputElement){

    this.apiService.login(new Usuario(null,null,null,correo.value,null,pass.value))
    .subscribe((data : Usuario[]) => {
      console.log("data: " + data);
      console.log("data[0]: " + JSON.stringify(data[0]));
      
      if(data[0] != undefined){
        console.log("CORRECTO");
        console.log("AHORA SI?" + this.apiService.usuario);
        
        this.apiService.usuario = new Usuario(data[0].id_usuario,data[0].nombre,data[0].apellidos,data[0].correo,data[0].foto,null);
        this.apiService.logueado = true;
        console.log("USUARIO: " + this.apiService.usuario.correo + " ¿ESTA LOGUEADO? " + this.apiService.logueado + " ESTE ES SU ID: " + this.apiService.usuario.id_usuario);
        
        this.goPlace();
        
        
      }else{
        this.apiService.logueado = false;
        console.log("ERROR LOS DATOS NO COINCIDEN");
        console.log("¿ESTA LOGUEADO? " + this.apiService.logueado);
        
        
      }
    })
  }

  onSubmit(form:NgForm){
    // console.log(form.value);
    console.log(this.usuario);
    
    
  }

  ngOnInit(): void {
    
  }

  
}
