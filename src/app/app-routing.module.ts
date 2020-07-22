import { AlugadosDeleteComponent } from './components/alugados/alugados-delete/alugados-delete.component';
import { AlugadosCreatComponent } from './components/alugados/alugados-creat/alugados-creat.component';
import { ReservaDeleteComponent } from './components/reserva/reserva-delete/reserva-delete.component';
import { ReservaReadComponent } from './components/reserva/reserva-read/reserva-read.component';
import { ReservaCreatComponent } from './components/reserva/reserva-creat/reserva-creat.component';
import { LivrosReadComponent } from './components/livros/livros-read/livros-read.component';
import { LivrosCreatComponent } from './components/livros/livros-creat/livros-creat.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlugadosReadComponent } from './components/alugados/alugados-read/alugados-read.component';


const routes: Routes = [{
  path:"",
  component:HomeComponent
},{
  path:"livros",
  component:LivrosReadComponent
},
{
  path:"livros/creat",
  component:LivrosCreatComponent
},
{
  path:"livros/:id",
  component:ReservaCreatComponent
},
{
  path:"reserva",
  component:ReservaReadComponent
},
{
  path:"reserva/:id",
  component:ReservaDeleteComponent
},
{
  path:"livros/alugados/:id",
  component:AlugadosCreatComponent
},
{
  path:"alugados",
  component:AlugadosReadComponent
},
{
  path:"alugados/:id",
  component:AlugadosDeleteComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
