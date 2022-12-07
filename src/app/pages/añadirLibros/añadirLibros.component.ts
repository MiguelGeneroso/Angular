import { Component } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { ServicioService } from '../../shared/servicio.service';
import { ServicioUsuarioService } from 'src/app/shared/servicio-usuario.service';

@Component({
  selector: 'app-libros',
  templateUrl: './añadirLibros.component.html',
  styleUrls: ['./añadirLibros.component.css']
})
export class LibrosComponent {

  public arrLibros : Libro[];
  public colorRojo : string;
  public colorVerde : string;

  constructor(public librosService : ServicioService,public usuarioService : ServicioUsuarioService){
    this.arrLibros = [
      
    ];
    this.colorRojo = "rojo";
    this.colorVerde = "verde"
  }

  public newLibro(titulo : HTMLInputElement,tipo : HTMLInputElement,autor : HTMLInputElement,precio : HTMLInputElement,foto : HTMLInputElement): void {
    
    this.librosService.add(new Libro(null,this.usuarioService.usuario.id_usuario,titulo.value,tipo.value,autor.value,parseInt(precio.value),foto.value))
      .subscribe((data : Libro[]) => {
        // console.log("DATA1 : "+data);
        // console.log(JSON.stringify(data));

        this.librosService.libros = data;
        
        
      })
  }
}
