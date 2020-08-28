import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  editar: boolean;
  eliminar: boolean;
}

@Component({
  selector: 'app-produc-list',
  templateUrl: './produc-list.component.html',
  styleUrls: ['./produc-list.component.css']
})


export class ProducListComponent implements OnInit {


  tiles: Tile[] = [
    {text: 'Nombre', cols: 1, rows: 1, color: '#d0d3d4', editar: false, eliminar: false},
    {text: 'Codigo', cols: 1, rows: 1, color: '#d0d3d4', editar: false, eliminar: false},
    {text: 'Precio', cols: 1, rows: 1, color: '#d0d3d4', editar: false, eliminar: false},
    {text: 'Editar', cols: 1, rows: 1, color: '#d0d3d4', editar: false, eliminar: false},
    {text: 'Eliminar', cols: 1, rows: 1, color: '#d0d3d4', editar: false, eliminar: false},
  ];

  tiles2: Tile[] = [
  ];
  constructor( private router: Router) {
    this.tiles2.push({text: 'Queso', cols: 1, rows: 1, color: '#ffffff', editar: false, eliminar: false});
    this.tiles2.push({text: '1', cols: 1, rows: 1, color: '#ffffff', editar: false, eliminar: false});
    this.tiles2.push({text: '150', cols: 1, rows: 1, color: '#ffffff', editar: false, eliminar: false});
    this.tiles2.push({text: 'Editar', cols: 1, rows: 1, color: '#ffffff', editar: true, eliminar: false});
    this.tiles2.push({text: 'Eliminar', cols: 1, rows: 1, color: '#ffffff', editar: false, eliminar: true});

    this.tiles2.push({text: 'Queso', cols: 1, rows: 1, color: '#ffffff', editar: false, eliminar: false});
    this.tiles2.push({text: '1', cols: 1, rows: 1, color: '#ffffff', editar: false, eliminar: false});
    this.tiles2.push({text: '150', cols: 1, rows: 1, color: '#ffffff', editar: false, eliminar: false});
    this.tiles2.push({text: 'Editar', cols: 1, rows: 1, color: '#ffffff', editar: true, eliminar: false});
    this.tiles2.push({text: 'Eliminar', cols: 1, rows: 1, color: '#ffffff', editar: false, eliminar: true});

    this.tiles2.push({text: 'Queso', cols: 1, rows: 1, color: '#ffffff', editar: false, eliminar: false});
    this.tiles2.push({text: '1', cols: 1, rows: 1, color: '#ffffff', editar: false, eliminar: false});
    this.tiles2.push({text: '150', cols: 1, rows: 1, color: '#ffffff', editar: false, eliminar: false});
    this.tiles2.push({text: 'Editar', cols: 1, rows: 1, color: '#ffffff', editar: true, eliminar: false});
    this.tiles2.push({text: 'Eliminar', cols: 1, rows: 1, color: '#ffffff', editar: false, eliminar: true});

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

  public navAgregarProducto (): void{
    this.router.navigate(['/agregar-producto']);
  }
}
