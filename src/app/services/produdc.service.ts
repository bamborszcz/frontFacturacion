import { Injectable } from '@angular/core';
import { Product } from '../models/product.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

export interface ProductUrl extends Product {  id: number; name: string; price: number;quantity: number; }

export interface Tile {
  id: number,
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

  private color: string;
  private buttonName: string;

  tiles: Tile[] = [];
  constructor(private http: HttpClient, private formBuilder: FormBuilder) {

   }
   private registerForm = this.formBuilder.group({// deben ser igual a los de la interfaz
    id: null,
    name: [''],
    price: [],
    quantity: []
    });
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

   public getProductsByID(id: number): Observable<any> {
    //this.tiles = [];
    return this.http.get<ProductUrl>('http://127.0.0.1:8080/'+id+'/edit');
   }


   public getTile(){
     return this.tiles;
   }

   public setTile(product: ProductUrl){
    this.tiles.push({id:null,text: product.name, cols: 1, rows: 1,editar: false, color: '#ffffff', eliminar: false});
    this.tiles.push({id:null,text: product.id.toString(), cols: 1, rows: 1,editar: false, color: '#ffffff', eliminar: false});
    this.tiles.push({id:null,text: product.price.toString(), cols: 1, rows: 1,editar: false, color: '#ffffff', eliminar: false});
    this.tiles.push({id:product.id,text: 'Editar', cols: 1, rows: 1, color: '#ffffff',editar: true, eliminar: false});
    this.tiles.push({id:null,text: 'Eliminar', cols: 1, rows: 1, color: '#ffffff',editar: false, eliminar: true});
  }

  public getRegisterForm(): FormGroup{
 return this.registerForm;
  }

  public setRegisterForm(name: string, price: number): void{
    this.registerForm = this.formBuilder.group({// deben ser igual a los de la interfaz
      id: null,
      name: [name],
      price: [price],
      quantity: []
      });
     }

     public getColor(): string{
       return this.color;
     }

     public setColor(color: string): void{
      this.color = color;
    }

     public setButtonName(buttonName: string): void{
      this.buttonName = buttonName;
    }

    public getButtonNamer(): string{
      return this.buttonName;
    }
}
