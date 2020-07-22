import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/template/nav/nav.component';
import  { HttpClientModule } from '@angular/common/http';

import { MatSidenavModule }  from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './views/home/home.component';
import { LivrosCreatComponent } from './components/livros/livros-creat/livros-creat.component'
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { LivrosReadComponent } from './components/livros/livros-read/livros-read.component';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData} from  '@angular/common';
import { ReservaCreatComponent } from './components/reserva/reserva-creat/reserva-creat.component';
import { ReservaReadComponent } from './components/reserva/reserva-read/reserva-read.component';
import { ReservaDeleteComponent } from './components/reserva/reserva-delete/reserva-delete.component';
import { AlugadosCreatComponent } from './components/alugados/alugados-creat/alugados-creat.component';
import { AlugadosReadComponent } from './components/alugados/alugados-read/alugados-read.component';
import { AlugadosDeleteComponent } from './components/alugados/alugados-delete/alugados-delete.component';


registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LivrosCreatComponent,
    LivrosReadComponent,
    ReservaCreatComponent,
    ReservaReadComponent,
    ReservaDeleteComponent,
    AlugadosCreatComponent,
    AlugadosReadComponent,
    AlugadosDeleteComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule

    
  ],
  providers: [ { provide: LOCALE_ID,
    useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
