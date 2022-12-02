import { Component } from '@angular/core';
import { ServicioService } from '../../shared/servicio.service';
import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'app-mostrar-libros',
  templateUrl: './mostrar-libros.component.html',
  styleUrls: ['./mostrar-libros.component.css']
})
export class MostrarLibrosComponent {

  public arrLibros : Libro[];

  constructor(public librosService : ServicioService){
    this.arrLibros = this.mostrarLibros();
  }

  public mostrarLibros() : Libro[]{
    
    return this.librosService.getAll();
    
    
  }

  public buscarLibro(id_libro : HTMLInputElement) : void{
    console.log("ESTOS SON LOS LIBROS" + this.arrLibros.length);
    if (id_libro.value == ""){
      this.arrLibros = this.librosService.getAll();
    }else{
      this.arrLibros = [this.librosService.getOne(parseInt(id_libro.value))]
    }
  }

  public borrarLibro(id_libro : number) : boolean{
    console.log(id_libro);
    
    return this.librosService.delete(id_libro);
  }

}
