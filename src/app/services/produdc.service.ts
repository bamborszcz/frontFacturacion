import { Injectable } from '@angular/core';
import { Product } from '../models/product.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ProductUrl extends Product {  id: number; name: string; price: number;quantity: number; }

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  editar: boolean;
  eliminar: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  tiles: Tile[] = [];
  constructor(private http: HttpClient) {

   }

  public loadProduct(product: ProductUrl): Observable<any>{

   return this.http.post<ProductUrl>('http://127.0.0.1:8080/new', {// antes debo pasarle el capcha por parametro, la variable es "g-recaptcha-response"
    id: product.id,
    name: product.name,
    price: product.price,
    quantity: product.quantity
    });
   }

   public getAllProducts(): Observable<any> {
    this.tiles = [];
    return this.http.get<ProductUrl>('http://127.0.0.1:8080/products');
   }



   public getTile(){
     return this.tiles;
   }

   public setTile(product: ProductUrl){
    this.tiles.push({text: product.name, cols: 1, rows: 1,editar: false, color: '#ffffff', eliminar: false});
    this.tiles.push({text: product.id.toString(), cols: 1, rows: 1,editar: false, color: '#ffffff', eliminar: false});
    this.tiles.push({text: product.price.toString(), cols: 1, rows: 1,editar: false, color: '#ffffff', eliminar: false});
    this.tiles.push({text: 'Editar', cols: 1, rows: 1, color: '#ffffff',editar: true, eliminar: false});
    this.tiles.push({text: 'Eliminar', cols: 1, rows: 1, color: '#ffffff',editar: false, eliminar: true});
  }
}
