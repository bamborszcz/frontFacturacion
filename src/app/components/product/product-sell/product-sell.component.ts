import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  eliminar: boolean;
}

@Component({
  selector: 'app-product-sell',
  templateUrl: './product-sell.component.html',
  styleUrls: ['./product-sell.component.css']
})
export class ProductSellComponent implements OnInit {

  tiles: Tile[] = [
    {text: 'Nombre', cols: 1, rows: 1, color: '#d0d3d4',  eliminar: false},
    {text: 'Codigo', cols: 1, rows: 1, color: '#d0d3d4',  eliminar: false},
    {text: 'Precio', cols: 1, rows: 1, color: '#d0d3d4', eliminar: false},
    {text: 'Total', cols: 1, rows: 1, color: '#d0d3d4',  eliminar: false},
    {text: 'Eliminar', cols: 1, rows: 1, color: '#d0d3d4', eliminar: false},
  ];

  tiles2: Tile[] = [
  ];
  constructor() {
    this.tiles2.push({text: 'Queso', cols: 1, rows: 1, color: '#ffffff', eliminar: false});
    this.tiles2.push({text: '1', cols: 1, rows: 1, color: '#ffffff', eliminar: false});
    this.tiles2.push({text: '150', cols: 1, rows: 1, color: '#ffffff', eliminar: false});
    this.tiles2.push({text: 'Total', cols: 1, rows: 1, color: '#ffffff', eliminar: false});
    this.tiles2.push({text: 'Eliminar', cols: 1, rows: 1, color: '#ffffff', eliminar: true});

    this.tiles2.push({text: 'Queso', cols: 1, rows: 1, color: '#ffffff', eliminar: false});
    this.tiles2.push({text: '1', cols: 1, rows: 1, color: '#ffffff', eliminar: false});
    this.tiles2.push({text: '150', cols: 1, rows: 1, color: '#ffffff', eliminar: false});
    this.tiles2.push({text: 'Total', cols: 1, rows: 1, color: '#ffffff', eliminar: false});
    this.tiles2.push({text: 'Eliminar', cols: 1, rows: 1, color: '#ffffff', eliminar: true});

    this.tiles2.push({text: 'Queso', cols: 1, rows: 1, color: '#ffffff', eliminar: false});
    this.tiles2.push({text: '1', cols: 1, rows: 1, color: '#ffffff', eliminar: false});
    this.tiles2.push({text: '150', cols: 1, rows: 1, color: '#ffffff', eliminar: false});
    this.tiles2.push({text: 'Total', cols: 1, rows: 1, color: '#ffffff', eliminar: false});
    this.tiles2.push({text: 'Eliminar', cols: 1, rows: 1, color: '#ffffff', eliminar: true});

  }

  ngOnInit(): void {
  }

  public text (button: string): boolean {
    let active = false;
    if (button !== 'Eliminar' && button !== 'Editar') {
      active = true;
    } else  {
      active = false;
    }
    return  active;
  }
}
