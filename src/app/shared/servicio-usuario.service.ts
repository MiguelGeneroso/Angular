import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class ServicioUsuarioService {

  private url : string;
  public logueado : boolean;
  public usuario : Usuario;

  constructor(private http : HttpClient) {
    this.logueado = false;
  }

  public register(usuario : Usuario){
    this.url = "http://localhost:4000/registro";
    // console.log("SERVICE URL : " + usuario.url);
    // console.log("SERVICE PASSWORD : " + usuario.password);
    
    return this.http.post(this.url,usuario);
  }

  public login(usuario : Usuario){
    this.url = "http://localhost:4000/login";
    return this.http.post(this.url,usuario);
  }
}
