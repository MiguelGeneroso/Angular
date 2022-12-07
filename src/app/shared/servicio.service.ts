import { Injectable } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  public libros : Libro[];
  private url : string = "http://localhost:4000/libros";

  constructor(private http : HttpClient) {
    this.libros = []
    // this.libros = [
    //   new Libro("El señor de los anillos","Tapa dura","J.R.R. Tolkien",30,"../../../assets/img/elSeñorDeLosAnillos.jpg",1001,1),
    //   new Libro("Don Quijote de la Mancha","Tapa dura","Miguel de Cervantes",24,"../../../assets/img/elQuijote.jpg",1002,1),
    //   new Libro("Memorias de Idhún","Tapa dura","Laura Gallego Garcia",35,"../../../assets/img/memoriasDeHidun.jpg",1003,2),
    // ]
  }

  public getAll(id_usuario : number){
    
    return this.http.get(this.url + "?idUsuario="+id_usuario);
  }
  public getOne(id_usuario : number,id_libro : number){

    return this.http.get(this.url + "?idUsuario=" + id_usuario + "&idLibro=" + id_libro);
  }
  public add(newLibro : Libro){
    
    return this.http.post(this.url,newLibro);
  }
  public edit(newLibro : Libro){
    
    return this.http.put(this.url,newLibro);
  }
  public delete(id_libro: number){

    let param = {header : {"Content-type" : "application/json; charset= UTF-8"}, body : {"id_libro" : id_libro}};

    return this.http.delete(this.url,param);
  }
}
