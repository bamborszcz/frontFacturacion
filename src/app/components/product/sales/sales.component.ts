import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;

}

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  tiles: Tile[] = [
    {text: 'Nombre', cols: 1, rows: 1, color: '#d0d3d4'},
    {text: 'Codigo', cols: 1, rows: 1, color: '#d0d3d4'},
    {text: 'Precio', cols: 1, rows: 1, color: '#d0d3d4'},
    {text: 'Total', cols: 1, rows: 1, color: '#d0d3d4'},
    {text: 'Cantidad', cols: 1, rows: 1, color: '#d0d3d4'},
  ];

  tiles2: Tile[] = [
  ];
  constructor() {
    this.tiles2.push({text: 'Queso', cols: 1, rows: 1, color: '#ffffff'});
    this.tiles2.push({text: '1', cols: 1, rows: 1, color: '#ffffff'});
    this.tiles2.push({text: '150', cols: 1, rows: 1, color: '#ffffff'});
    this.tiles2.push({text: 'Total', cols: 1, rows: 1, color: '#ffffff'});
    this.tiles2.push({text: '200', cols: 1, rows: 1, color: '#ffffff'});

    this.tiles2.push({text: 'Queso', cols: 1, rows: 1, color: '#ffffff'});
    this.tiles2.push({text: '1', cols: 1, rows: 1, color: '#ffffff'});
    this.tiles2.push({text: '150', cols: 1, rows: 1, color: '#ffffff'});
    this.tiles2.push({text: 'Total', cols: 1, rows: 1, color: '#ffffff'});
    this.tiles2.push({text: '200', cols: 1, rows: 1, color: '#ffffff'});

    this.tiles2.push({text: 'Queso', cols: 1, rows: 1, color: '#ffffff'});
    this.tiles2.push({text: '1', cols: 1, rows: 1, color: '#ffffff'});
    this.tiles2.push({text: '150', cols: 1, rows: 1, color: '#ffffff'});
    this.tiles2.push({text: 'Total', cols: 1, rows: 1, color: '#ffffff'});
    this.tiles2.push({text: '200', cols: 1, rows: 1, color: '#ffffff'});

  }

  ngOnInit(): void {
  }


}
