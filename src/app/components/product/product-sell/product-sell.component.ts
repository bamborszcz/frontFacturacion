import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductService, SaleUrl } from '../../../services/produdc.service';

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

sale: SaleUrl = {
  id: null,
  clientName: '',
  date: null,
  productsSold: [],
  total: null
};

total: number = 0;
  tiles: Tile[] = [
    {text: 'Nombre', cols: 1, rows: 1, color: '#d0d3d4',  eliminar: false},
    {text: 'Cantidad', cols: 1, rows: 1, color: '#d0d3d4',  eliminar: false},
    {text: 'Precio', cols: 1, rows: 1, color: '#d0d3d4', eliminar: false},
    {text: 'Total', cols: 1, rows: 1, color: '#d0d3d4',  eliminar: false},
    {text: 'Eliminar', cols: 1, rows: 1, color: '#d0d3d4', eliminar: false},
  ];


  constructor( public productService: ProductService) {

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

  public loadProduct() {
   this.productService.resetTileVentas();
   this.sale.productsSold = [];
this.productService.soldProduct(this.productService.getRegisterForm().value).toPromise().then((data: any) => {

console.log(data);

this.productService.getProductSellTotal().subscribe(data=>{
  console.log('total'+data);
  this.total = data;
});
for (let product of data) {

this.productService.setTileVentas(product);
this.sale.productsSold.push(product);
}

});


  }



  public borrarProductList(id: number): void {
    this.productService.resetTileVentas();
    this.sale.productsSold = [];
    this.productService.deleteProductTileVentas(id).subscribe(
      data => {
        console.log(data);

        this.productService.getProductSellTotal().subscribe(data=>{
          console.log('total'+data);
          this.total = data;
        });

        for (let product of data) {

          this.productService.setTileVentas(product);
          this.sale.productsSold.push(product);

          }
        console.log(data);

        }
    );
  }

  onKey(event: any) { // without type info
    this.sale.clientName = event.target.value;
  }

  public saveSale() {

    this.productService.saveSale(this.sale).toPromise().then((data: any) => {

      console.log(data);

    });
  }


}
