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

  public register(usuario : Usuario) : void{
    this.url = "http://localhost:4000/registro";
    this.http.post(this.url,usuario);
  }

  public  login(usuario : Usuario) : void{
    this.url = "http://localhost:4000/registro";
    this.http.post(this.url,usuario);
  }
}
