import { reserva } from './../reserva.model';
import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../reserva.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserva-read',
  templateUrl: './reserva-read.component.html',
  styleUrls: ['./reserva-read.component.css']
})
export class ReservaReadComponent implements OnInit {
  reserva: reserva []
  reservaId: reserva
  displayedColumns = ['nomeLivro','nomeCliente','data','valorLivro', 'cancelar']
  constructor(private reservaService: ReservaService, private router: Router) { }

  ngOnInit(): void {
    this.reservaService.read().subscribe(reserva =>{
      this.reserva = reserva
    })
  }
  

}

