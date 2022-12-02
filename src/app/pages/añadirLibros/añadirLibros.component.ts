import { Component } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { ServicioService } from '../../shared/servicio.service';

@Component({
  selector: 'app-libros',
  templateUrl: './añadirLibros.component.html',
  styleUrls: ['./añadirLibros.component.css']
})
export class LibrosComponent {

  public arrLibros : Libro[];
  public colorRojo : string;
  public colorVerde : string;

  constructor(public librosService : ServicioService){
    this.arrLibros = [
      
    ];
    this.colorRojo = "rojo";
    this.colorVerde = "verde"
  }

  public newLibro(titulo : HTMLInputElement,tipo : HTMLInputElement,autor : HTMLInputElement,precio : HTMLInputElement,foto : HTMLInputElement,idLibro : HTMLInputElement,idUsuario : HTMLInputElement): void {
    let newLibro : Libro = new Libro(titulo.value,tipo.value,autor.value,parseInt(precio.value),foto.value,parseInt(idLibro.value),parseInt(idUsuario.value))
    this.librosService.add(newLibro)
  }
}
