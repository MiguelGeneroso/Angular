import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {RegistroComponent} from './pages/registro/registro.component';
import {PerfilComponent} from './pages/perfil/perfil.component';
import {LibrosComponent} from './pages/añadirLibros/añadirLibros.component';
import {MostrarLibrosComponent} from './pages/mostrar-libros/mostrar-libros.component';
import { ModificarLibrosComponent } from './pages/modificar-libros/modificar-libros.component';

const routes: Routes = [
  {path: "home", component : HomeComponent},
  {path: "registro", component : RegistroComponent},
  {path: "perfil", component : PerfilComponent},
  {path: "books", component : LibrosComponent},
  {path: "modificarLibros", component : ModificarLibrosComponent},
  {path: "mostrarLibros", component : MostrarLibrosComponent},
  {path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
