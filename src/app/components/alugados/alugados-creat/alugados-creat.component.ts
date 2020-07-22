import { AlugadosService } from './../alugados.service';
import { Alugados } from './../alugados.model';
import { Component, OnInit } from '@angular/core';
import { livros } from '../../livros/livros.model';
import { ActivatedRoute, Router } from '@angular/router';
import { LivrosService } from '../../livros/livros.service';

@Component({
  selector: 'app-alugados-creat',
  templateUrl: './alugados-creat.component.html',
  styleUrls: ['./alugados-creat.component.css']
})
export class AlugadosCreatComponent implements OnInit {
  livros:livros
  alugados:Alugados = {
    nomeCliente:'',
    nomeLivro:'',
    valorLivro:null
  }
  constructor( private livrosService: LivrosService, 
    private router:Router, 
    private route: ActivatedRoute,
    private alugadosService:AlugadosService) { }

  ngOnInit(): void {
    const id =  +this.route.snapshot.paramMap.get('id')
    this.livrosService.readById(id).subscribe(livros =>{
      this.livros = livros
      this.alugados.nomeLivro = this.livros.nome
      this.alugados.valorLivro = this.livros.valor
    })
    
    
  }
  AlugarLivro(){
    this.alugadosService.create(this.alugados).subscribe(()=> {
      this.router.navigate(['/'])
    })
  }
  cancel(){
    this.router.navigate([''])
  }


}
