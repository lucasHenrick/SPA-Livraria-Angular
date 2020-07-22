import { AlugadosService } from './../alugados.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alugados } from '../alugados.model';

@Component({
  selector: 'app-alugados-read',
  templateUrl: './alugados-read.component.html',
  styleUrls: ['./alugados-read.component.css']
})
export class AlugadosReadComponent implements OnInit {
  alugados: Alugados[]
  alugadosId: Alugados
  displayedColumns = ['nomeLivro','nomeCliente','valorLivro','cancelar']
  constructor(private alugadosService:AlugadosService, private router: Router) { }

  ngOnInit(): void {
    this.alugadosService.read().subscribe(alugados =>{
      this.alugados = alugados
    }
    )
  }

}
