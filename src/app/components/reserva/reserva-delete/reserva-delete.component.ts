import { reserva } from './../reserva.model';
import { ReservaService } from './../reserva.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reserva-delete',
  templateUrl: './reserva-delete.component.html',
  styleUrls: ['./reserva-delete.component.css']
})
export class ReservaDeleteComponent implements OnInit {
  reserva: reserva  
  constructor(private reservaService: ReservaService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.reservaService.readById(id).subscribe(livros=>{
      this.reserva = livros
    })
  }
  deleteReserva(): void {
    this.reservaService.delete(this.reserva.id).subscribe(() =>{
      this.router.navigate(['/reserva'])
    })
    
  }
  cancel(): void {
    this.router.navigate(['/reserva'])
  }

}
