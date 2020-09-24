import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/produdc.service';

@Component({
  selector: 'app-head-buttons',
  templateUrl: './head-buttons.component.html',
  styleUrls: ['./head-buttons.component.css']
})
export class HeadButtonsComponent implements OnInit {

  constructor(private router: Router, private prodServ: ProductService) { }

  ngOnInit(): void {
  }

  public navVenta (): void{
    this.router.navigate(['/venta']);
    this.prodServ.resetTileVentas();
    this.prodServ.setRegisterForm(null,'',null); // limpio el formulario despues de usarlo

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
