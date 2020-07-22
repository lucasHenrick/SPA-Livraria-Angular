import { LivrosService } from './../livros.service';
import { livros } from './../livros.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-livros-read',
  templateUrl: './livros-read.component.html',
  styleUrls: ['./livros-read.component.css']
})
export class LivrosReadComponent implements OnInit {
  livros: livros []
  displayedColumns = ['nome','valor','reservar','alugar']
  constructor(private livrosService:LivrosService, private router: Router) { }

  ngOnInit(): void {
    this.livrosService.read().subscribe(livros =>{
      this.livros = livros
    })
  }
  navigateNovoLivro(){
    this.router.navigate(['livros/creat'])
  }

}
