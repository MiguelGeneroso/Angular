import { Injectable } from '@angular/core';
import { Libro } from 'src/app/models/libro';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private libros : Libro[];

  constructor() {
    this.libros = []
    this.libros = [new Libro("El señor de los anillos","Tapa dura","J.R.R. Tolkien",30,"../../../assets/img/elSeñorDeLosAnillos.jpg",1001,1),
    new Libro("Don Quijote de la Mancha","Tapa dura","Miguel de Cervantes",24,"../../../assets/img/elQuijote.jpg",1002,1),
    new Libro("Memorias de Idhún","Tapa dura","Laura Gallego Garcia",35,"../../../assets/img/memoriasDeHidun.jpg",1003,2),
  ]
  }

  public getAll()  : Libro[]{
    
    return this.libros;
  }
  public getOne(id_libro : number) : Libro{

    let libro : Libro;
    for(let i = 0; i<this.libros.length;i++){
      if(this.libros[i].id_libro == id_libro){
        libro = this.libros[i];
      }
    }
    return libro;
  }
  public add(libro: Libro): void{
    this.libros.push(libro);
  }
  public edit(libro: Libro){
    let position : number;
    let result : boolean = false;
    for(let i = 0; i < this.libros.length; i++){
      if(libro.id_libro == this.libros[i].id_libro){
        result = true;
        this.libros[i].titulo = libro.titulo;
        this.libros[i].tipoLibro = libro.tipoLibro;
        this.libros[i].autor = libro.autor;
        this.libros[i].precio = libro.precio;
        this.libros[i].photo = libro.photo;
        this.libros[i].id_libro = libro.id_libro;
        this.libros[i].id_usuario = libro.id_usuario;
        console.log("libro de array: " + this.libros[i]);
        
      }

    }
  }
  public delete(id_libro: number): boolean{
    let result : boolean;
    let position : number;
    result = false;
    for (let i = 0; i < this.libros.length; i++){
      if(id_libro == this.libros[i].id_libro){
        result = true;
        position = i;
      }
    }
    if (result == true){
      this.libros.splice(position,1);
    }

    return result;
  }
}
