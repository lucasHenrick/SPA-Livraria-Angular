import { LivrosService } from './../livros.service';
import { Component, OnInit } from '@angular/core';
import { livros } from '../livros.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livros-creat',
  templateUrl: './livros-creat.component.html',
  styleUrls: ['./livros-creat.component.css']
})
export class LivrosCreatComponent implements OnInit {
   
  livro : livros = {
    nome:'',
    valor:null
  }
  constructor(private livrosService:LivrosService, 
    private router: Router) { }

  ngOnInit(): void {
  }
  createrLivros(): void {
    this.livrosService.create(this.livro).subscribe(()=> {
      this.router.navigate(['/'])
    })
}
  cancel(): void {
    this.router.navigate([''])
  }
}
