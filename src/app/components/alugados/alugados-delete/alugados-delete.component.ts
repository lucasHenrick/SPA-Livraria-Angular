import { AlugadosService } from './../alugados.service';
import { Alugados } from './../alugados.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-alugados-delete',
  templateUrl: './alugados-delete.component.html',
  styleUrls: ['./alugados-delete.component.css']
})
export class AlugadosDeleteComponent implements OnInit {
  alugados:Alugados
  constructor(private alugadosService:AlugadosService,  
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.alugadosService.readById(id).subscribe(livros=>{
      this.alugados = livros
    })
  }
  deleteAlugados(): void {
    this.alugadosService.delete(this.alugados.id).subscribe(() =>{
      this.router.navigate([''])
    })
    
  }
  cancel(): void {
    this.router.navigate([''])
  }

}
