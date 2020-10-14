import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/produdc.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  productos: boolean;
  eliminar: boolean;
}

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  tiles: Tile[] = [
    {text: 'Codigo', cols: 1, rows: 1, color: '#d0d3d4', productos: false, eliminar: true},
    {text: 'Cliente', cols: 1, rows: 1, color: '#d0d3d4', productos: false, eliminar: true},
    {text: 'Fecha', cols: 1, rows: 1, color: '#d0d3d4', productos: false, eliminar: true},
    {text: 'Total', cols: 1, rows: 1, color: '#d0d3d4', productos: false, eliminar: true},
    {text: 'Productos', cols: 1, rows: 1, color: '#d0d3d4', productos: false, eliminar: false},
    {text: 'Borrar', cols: 1, rows: 1, color: '#d0d3d4', productos: false, eliminar: false}
  ];

  tiles2: Tile[] = [
  ];
  constructor( public prodServ: ProductService) {


  }

  ngOnInit(): void {
    this.prodServ.resetTileVentasRealizadas();
    this.prodServ.getSaleList().subscribe(data=>{
      console.log(data);


      for (let product of data) {
     this.prodServ.setTileVentasRealizadas(product);

        }
    });
  }


  deleteSale(id: number){
    this.prodServ.deleteSale(id).subscribe( data => {
      console.log(data);
      window.location.reload();
      });
  }

  public text (button: string): boolean {
    let active = false;
    if (button !== 'Productos' && button !== 'Eliminar') {
      active = true;
    } else  {
      active = false;
    }
    return  active;
  }
}
