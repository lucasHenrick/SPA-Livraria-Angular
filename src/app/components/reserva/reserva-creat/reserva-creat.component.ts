import { ReservaService } from './../reserva.service';
import { reserva } from './../reserva.model';
import { livros } from './../../livros/livros.model';
import { LivrosService } from './../../livros/livros.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reserva-creat',
  templateUrl: './reserva-creat.component.html',
  styleUrls: ['./reserva-creat.component.css']
})
export class ReservaCreatComponent implements OnInit {

  livros:livros

  reserva:reserva = {
    data:'',
    nomeCliente:'',
    nomeLivro: '',
    valorLivro: null,
  }
  constructor(
    private livrosService: LivrosService, 
    private router:Router, 
    private route: ActivatedRoute,
    private reservaService:ReservaService) { }

  ngOnInit(): void {
    const id =  +this.route.snapshot.paramMap.get('id')
    this.livrosService.readById(id).subscribe(livros =>{
      this.livros = livros
      this.reserva.nomeLivro = livros.nome
      this.reserva.valorLivro = livros.valor
    })
  }
  
  reservarLivro(){
    
    this.reservaService.create(this.reserva).subscribe(()=> {
      this.router.navigate(['/'])
    })
  }
  cancel(){
    this.router.navigate([''])
  }
}
