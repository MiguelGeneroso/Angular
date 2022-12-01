import { Component } from '@angular/core';
import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {

  public arrLibros : Libro[];
  public colorRojo : string;
  public colorVerde : string;

  constructor(){
    this.arrLibros = [
      new Libro("El señor de los anillos","Tapa dura","J.R.R. Tolkien",30,"../../../assets/img/elSeñorDeLosAnillos.jpg",1001,1),
      new Libro("Don Quijote de la Mancha","Tapa dura","Miguel de Cervantes",24,"../../../assets/img/elQuijote.jpg",1002,1),
      new Libro("Memorias de Idhún","Tapa dura","Laura Gallego Garcia",35,"../../../assets/img/memoriasDeHidun.jpg",1003,2),
      new Libro("El señor de los anillos","Tapa dura","J.R.R. Tolkien",30,"../../../assets/img/elSeñorDeLosAnillos.jpg",1001,1),
      new Libro("Don Quijote de la Mancha","Tapa dura","Miguel de Cervantes",24,"../../../assets/img/elQuijote.jpg",1002,1),
      new Libro("Memorias de Idhún","Tapa dura","Laura Gallego Garcia",35,"../../../assets/img/memoriasDeHidun.jpg",1003,2),
      new Libro("El señor de los anillos","Tapa dura","J.R.R. Tolkien",30,"../../../assets/img/elSeñorDeLosAnillos.jpg",1001,1),
      new Libro("Don Quijote de la Mancha","Tapa dura","Miguel de Cervantes",24,"../../../assets/img/elQuijote.jpg",1002,1),
      new Libro("Memorias de Idhún","Tapa dura","Laura Gallego Garcia",35,"../../../assets/img/memoriasDeHidun.jpg",1003,2),
      new Libro("El señor de los anillos","Tapa dura","J.R.R. Tolkien",30,"../../../assets/img/elSeñorDeLosAnillos.jpg",1001,1),
      new Libro("Don Quijote de la Mancha","Tapa dura","Miguel de Cervantes",24,"../../../assets/img/elQuijote.jpg",1002,1),
      new Libro("Memorias de Idhún","Tapa dura","Laura Gallego Garcia",35,"../../../assets/img/memoriasDeHidun.jpg",1003,2),
      new Libro("El señor de los anillos","Tapa dura","J.R.R. Tolkien",30,"../../../assets/img/elSeñorDeLosAnillos.jpg",1001,1),
      new Libro("Don Quijote de la Mancha","Tapa dura","Miguel de Cervantes",24,"../../../assets/img/elQuijote.jpg",1002,1),
      new Libro("Memorias de Idhún","Tapa dura","Laura Gallego Garcia",35,"../../../assets/img/memoriasDeHidun.jpg",1003,2),

    ];
    this.colorRojo = "rojo";
    this.colorVerde = "verde"
  }

  public newLibro(titulo : HTMLInputElement,tipo : HTMLInputElement,autor : HTMLInputElement,precio : HTMLInputElement,foto : HTMLInputElement,idLibro : HTMLInputElement,idUsuario : HTMLInputElement): void {

    if (idLibro.value == "" && idUsuario.value == ""){
      this.arrLibros.push(new Libro(titulo.value,tipo.value,autor.value,parseInt(precio.value),foto.value))
    }else if(idLibro.value != "" && idUsuario.value == ""){
      this.arrLibros.push(new Libro(titulo.value,tipo.value,autor.value,parseInt(precio.value),foto.value,parseInt(idLibro.value)))

    }else if(idLibro.value == "" && idUsuario.value != ""){
      this.arrLibros.push(new Libro(titulo.value,tipo.value,autor.value,parseInt(precio.value),foto.value,0,parseInt(idUsuario.value)))

    }else{
      this.arrLibros.push(new Libro(titulo.value,tipo.value,autor.value,parseInt(precio.value),foto.value,parseInt(idLibro.value),parseInt(idUsuario.value)))

    }
  }
}
