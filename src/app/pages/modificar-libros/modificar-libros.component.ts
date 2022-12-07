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

    this.librosService.edit(new Libro(parseInt(idLibro.value),parseInt(idUsuario.value),titulo.value,tipo.value,autor.value,parseInt(precio.value),foto.value))
      .subscribe((data : Libro[]) => {
        // console.log("DATA1 : "+data);
        // console.log(JSON.stringify(data));

        this.librosService.libros = data;
        
        
      })
  }
}
