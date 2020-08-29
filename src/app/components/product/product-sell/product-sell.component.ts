import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductService } from '../../../services/produdc.service';

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
  constructor(private formBuilder: FormBuilder, private productService: ProductService) {
    this.tiles2.push({text: 'Queso', cols: 1, rows: 1, color: '#ffffff', eliminar: false});
    this.tiles2.push({text: '1', cols: 1, rows: 1, color: '#ffffff', eliminar: false});
    this.tiles2.push({text: '150', cols: 1, rows: 1, color: '#ffffff', eliminar: false});
    this.tiles2.push({text: 'Total', cols: 1, rows: 1, color: '#ffffff', eliminar: false});
    this.tiles2.push({text: 'Eliminar', cols: 1, rows: 1, color: '#ffffff', eliminar: true});

  }

 registerForm = this.formBuilder.group({// deben ser igual a los de la interfaz
  id: [],
  name: [''],
  price: [],
  quantity: []
  });

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

  public loadProduct(): void {

   this.tiles2.push({text: this.registerForm.value.name, cols: 1, rows: 1, color: '#ffffff', eliminar: false});
    this.tiles2.push({text: this.registerForm.value.code, cols: 1, rows: 1, color: '#ffffff', eliminar: false});
    this.tiles2.push({text: this.registerForm.value.price, cols: 1, rows: 1, color: '#ffffff', eliminar: false});
    this.tiles2.push({text: 'Total', cols: 1, rows: 1, color: '#ffffff', eliminar: false});
    this.tiles2.push({text: 'Eliminar', cols: 1, rows: 1, color: '#ffffff', eliminar: true});


    console.log(this.registerForm.value.name);

  }

  public deleteProduct() {
    this.tiles2.splice(0,5);
  }
}
