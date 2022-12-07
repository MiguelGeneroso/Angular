import { Component } from '@angular/core';
import { ServicioService } from '../../shared/servicio.service';
import { ServicioUsuarioService } from '../../shared/servicio-usuario.service';
import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'app-mostrar-libros',
  templateUrl: './mostrar-libros.component.html',
  styleUrls: ['./mostrar-libros.component.css']
})
export class MostrarLibrosComponent {

  public arrLibros : Libro[];

  constructor(public librosService : ServicioService, public usuariosService : ServicioUsuarioService){
    this.arrLibros = [];
    this.mostrarLibros();
  }

  public mostrarLibros(){

      let datos : Libro[];
      datos = []

      this.librosService.getAll(this.usuariosService.usuario.id_usuario)
      .subscribe((data : Libro[]) => {

        this.arrLibros = data;
        
      })
      
  }

  public buscarLibro(id_libro : string){
    // console.log("ESTOS SON LOS LIBROS" + this.arrLibros.length);
    // if (id_libro.value == ""){
    //   this.arrLibros = this.librosService.getAll();
    // }else{
    //   this.arrLibros = [this.librosService.getOne(parseInt(id_libro.value))]
    // }
    console.log("ID LIBRO = " + id_libro);
    
    if(id_libro == ""){
      console.log("Hola");

      this.librosService.getAll(this.usuariosService.usuario.id_usuario)
      .subscribe((data : Libro[]) => {
        // console.log("DATA1 : "+data);
        // console.log(JSON.stringify(data));

        this.arrLibros = data;
        
        
      })
    }else{
      console.log("adios");
      
      this.librosService.getOne(this.usuariosService.usuario.id_usuario,parseInt(id_libro))
      .subscribe((data : Libro[]) => {
        this.arrLibros = data;
      })
      
    }
  }

  public borrarLibro(id_libro : number){
    // console.log(id_libro);
    
    // return this.librosService.delete(id_libro);

    this.librosService.delete(id_libro)
    .subscribe((data : Libro[]) => {
      console.log(JSON.stringify(data));
      
    })

    this.buscarLibro("")
  }

}
