import { Component } from '@angular/core';
import { ServicioService } from '../../shared/servicio.service';
import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'app-modificar-libros',
  templateUrl: './modificar-libros.component.html',
  styleUrls: ['./modificar-libros.component.css']
})
export class ModificarLibrosComponent {

  public libros : Libro[];

  constructor(public librosService : ServicioService){

  }

  public modificarLibro(titulo : HTMLInputElement,tipo : HTMLInputElement,autor : HTMLInputElement,precio : HTMLInputElement,foto : HTMLInputElement,idLibro : HTMLInputElement,idUsuario : HTMLInputElement) : void{

    let editLibro = new Libro(titulo.value,tipo.value,autor.value,parseInt(precio.value),foto.value,parseInt(idLibro.value),parseInt(idUsuario.value));
    console.log(editLibro.id_libro);
    
    this.librosService.edit(editLibro);
  }
}
