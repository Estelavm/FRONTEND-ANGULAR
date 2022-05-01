import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor(private datosPortfolio:PortfolioService) {
    
  
    this.ngOnInit(); void {
      this: datosPortfolio.obtenerDatos(),
    };




}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
