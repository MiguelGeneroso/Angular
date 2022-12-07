import { Component } from '@angular/core';
import { ServicioUsuarioService } from '../../shared/servicio-usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public conectado : boolean;
  public desconectado : boolean;
  
  constructor(private apiService : ServicioUsuarioService){
    this.conectado = false;
  }

  public comprobarLogin() : boolean{
    if (this.apiService.logueado == true){
      this.conectado = true;
    }else{
      this.conectado = false;
    }
    // console.log("CONECTADOOOO: " + this.conectado);
    
    return this.conectado;
  }
}
