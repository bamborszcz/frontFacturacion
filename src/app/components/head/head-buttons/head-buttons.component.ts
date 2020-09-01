import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-head-buttons',
  templateUrl: './head-buttons.component.html',
  styleUrls: ['./head-buttons.component.css']
})
export class HeadButtonsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public navVenta (): void{
    this.router.navigate(['/venta']);
  }

  public navListaProductos (): void{
    this.router.navigate(['/lista-de-productos']);
  }

  public navVentasRealizadas (): void{
    this.router.navigate(['/ventas-realizadas']);
  }

  public navRegistro (): void{
    this.router.navigate(['/registro']);
  }

  public navIngreso (): void{
    this.router.navigate(['/ingreso']);
  }
}
