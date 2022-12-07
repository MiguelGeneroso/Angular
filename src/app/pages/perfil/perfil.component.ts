import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent{

  public miUsuario : Usuario;
  public isHidden : boolean;
  public parrafo : string;
  public color : string;

  constructor(private toastr: ToastrService){
    this.miUsuario = new Usuario(1,"Miguel","Generoso Valero","gene17051996@gmail.com","../../../assets/img/imgPerfil.jpg","Mi_Contraseña_24")
    this.isHidden = true;
    this.parrafo = "<p></p>";
    this.color;
  }

  public nombreCompleto():string{
    return this.miUsuario.nombreCompleto();
  }

  public modificarUsuario(nombre : HTMLInputElement,apellidos : HTMLInputElement,email : HTMLInputElement,url : HTMLInputElement) : void{

    if(nombre.value == ""){
      this.miUsuario.nombre = this.miUsuario.nombre
    }else{
      this.miUsuario.nombre = nombre.value;
    }

    if(apellidos.value == ""){
      this.miUsuario.apellidos = this.miUsuario.apellidos
    }else{
      this.miUsuario.apellidos = apellidos.value;
    }

    if(email.value == ""){
      this.miUsuario.correo = this.miUsuario.correo
    }else{
      this.miUsuario.correo = email.value;
    }

    if(url.value == ""){
      this.miUsuario.foto = this.miUsuario.foto
    }else{
      this.miUsuario.foto = url.value;
    }

    if(url.value == "" && email.value == "" && apellidos.value == "" && nombre.value == ""){
      this.parrafo = "NO SE HAN DETECTADO CAMBIOS";
      this.color = "color1";
      this.isHidden = false;
    }else{
      this.parrafo = "USUARIO ACTUALIZADO";
      this.color = "color2";
      this.isHidden = false;
    }
    console.log(this.miUsuario.nombre);
    
    // this.miUsuario.modificarUsuario(this.miUsuario.nombre,this.miUsuario.apellidos,this.miUsuario.correo,this.miUsuario.url)

  }
}
