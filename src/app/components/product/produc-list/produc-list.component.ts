import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/produdc.service';


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
  constructor( private router: Router, public productService: ProductService) {


this.productService.getAllProducts().subscribe(
  data => {
    console.log(data);
    data.forEach(product => {
       productService.setTile(product);
       console.log(product);

    });

  }
);
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
    this.productService.setColor('primary');
    this.productService.setButtonName('Guardar');

  }
  public navEditarProducto (id: number): void{
    this.router.navigate(['/agregar-producto']);
    console.log(id);
    this.productService.setButtonName("Editar");
    this.productService.setColor("accent");
    this.productService.getProductsByID(id).subscribe(
      data => {
        console.log(data);

        this.productService.setRegisterForm(data.name, data.price);

        });
  }
}
