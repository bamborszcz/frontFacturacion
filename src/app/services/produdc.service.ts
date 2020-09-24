import { Injectable } from '@angular/core';
import { Product } from '../models/product.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Sale } from '../models/sale.interface';


export interface ProductUrl extends Product {  id: number; name: string; price: number;quantity: number; total: number}

export interface SaleUrl extends Sale {  id: number; clientName: string; date: Date; productsSold: ProductUrl[]; total: number;}

export interface Tile {
  id: number,
  color: string;
  cols: number;
  rows: number;
  text: string;
  editar: boolean;
  eliminar: boolean;
}

export interface TileVentas {
  id: number,
  color: string;
  cols: number;
  rows: number;
  text: string;
  eliminar: boolean;
}

export interface TileVentasRealizadas {
  id: number,
  color: string;
  cols: number;
  rows: number;
  text: string;
  productos: boolean;
  eliminar: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private color: string;
  private buttonName: string;
  private editar: boolean = false;

  private tiles: Tile[] = [];
  private tilesVentas: TileVentas[] = [];
  private tileVentasRealizadas: TileVentasRealizadas[] = [];

   position = 0;
   elementos = 0;
  constructor(private http: HttpClient, private formBuilder: FormBuilder) {

   }
   private registerForm = this.formBuilder.group({// deben ser igual a los de la interfaz
    id: null,
    name: [''],
    price: [],
    quantity: [],
     total: []
    });


    public saveSale(sale: SaleUrl): Observable<any>{

      return this.http.post<SaleUrl>('http://127.0.0.1:8080/sell/save', {
        id: sale.id,
        clientName: sale.clientName,
        date: sale.date,
        productsSold: sale.productsSold,
        total: sale.total
       });
      }


  public saveProduct(product: ProductUrl): Observable<any>{

   return this.http.post<ProductUrl>('http://127.0.0.1:8080/new', {
    id: product.id, // siempre se setea en null para guardar e autoincrementar en la bbdd
    name: product.name,
    price: product.price,
    quantity: product.quantity
    });
   }

   public soldProduct(product: ProductUrl): Observable<any>{

    return this.http.post<ProductUrl>('http://127.0.0.1:8080/sell/add', {// antes debo pasarle el capcha por parametro, la variable es "g-recaptcha-response"
     // siempre se setea en null para guardar e autoincrementar en la bbdd
     //id: product.id, // siempre se setea en null para guardar e autoincrementar en la bbdd
    name: product.name,
    price: product.price,
    quantity: product.quantity,
    total: product.total
     });
    }
   public editProduct(product: ProductUrl): Observable<any>{

    return this.http.put<ProductUrl>('http://127.0.0.1:8080/'+product.id+'/edit', {// antes debo pasarle el capcha por parametro, la variable es "g-recaptcha-response"
     id: product.id, // id del producto distinto de null
     name: product.name,
     price: product.price,
     quantity: product.quantity
     });
    }

    public deleteProduct(id: number): Observable<any>{

      return this.http.delete<ProductUrl>('http://127.0.0.1:8080/'+id+'/delete');
      }

    public deleteProductTileVentas(id: number): Observable<any>{
      console.log('borrar');
     console.log(this.getTileVentas());

     return this.http.delete<ProductUrl>('http://127.0.0.1:8080/sell/remove/'+id);


        }

   public getAllProducts(): Observable<any> {
    this.tiles = [];
    return this.http.get<ProductUrl>('http://127.0.0.1:8080/products');
   }


   public getProductsByID(id: number): Observable<any> {
    //this.tiles = [];
    return this.http.get<ProductUrl>('http://127.0.0.1:8080/'+id+'/edit');
   }

   public getProductSellTotal(): Observable<any> {
    //this.tiles = [];
    return this.http.get<ProductUrl>('http://127.0.0.1:8080/sell');
   }

   public getSaleList(): Observable<any>  {
    return this.http.get<SaleUrl>('http://127.0.0.1:8080/sales/list');
   }


   public setTile(product: ProductUrl){ // editar y eliminar guardan el id del producto para editarlo o eliminarlo
    this.tiles.push({id:null,text: product.name, cols: 1, rows: 1,editar: false, color: '#ffffff', eliminar: false});
    this.tiles.push({id:null,text: product.id.toString(), cols: 1, rows: 1,editar: false, color: '#ffffff', eliminar: false});
    this.tiles.push({id:null,text: product.price.toString(), cols: 1, rows: 1,editar: false, color: '#ffffff', eliminar: false});
    this.tiles.push({id:product.id,text: 'Editar', cols: 1, rows: 1, color: '#ffffff',editar: true, eliminar: false});
    this.tiles.push({id:product.id,text: 'Eliminar', cols: 1, rows: 1, color: '#ffffff',editar: false, eliminar: true});
  }

  public setTileVentas(product: ProductUrl) {
    this.tilesVentas.push({id:product.id,text: product.name, cols: 1, rows: 1, color: '#ffffff', eliminar: false});
    this.tilesVentas.push({id:product.id,text: product.quantity.toString(), cols: 1, rows: 1, color: '#ffffff', eliminar: false});
    this.tilesVentas.push({id:product.id,text: product.price.toString(), cols: 1, rows: 1, color: '#ffffff', eliminar: false});
    this.tilesVentas.push({id:product.id,text: product.total.toString(), cols: 1, rows: 1, color: '#ffffff', eliminar: false});
    this.tilesVentas.push({id:product.id,text: 'Eliminar', cols: 1, rows: 1, color: '#ffffff', eliminar: true});

  }

  public setTileVentasRealizadas(sales: SaleUrl) {
    this.tileVentasRealizadas.push({id: sales.id, text: sales.id.toString(), cols: 1, rows: 1, color: '#ffffff', productos: false, eliminar: false});
    this.tileVentasRealizadas.push({id: sales.id, text: sales.clientName, cols: 1, rows: 1, color: '#ffffff', productos: false, eliminar: false});
    this.tileVentasRealizadas.push({id: sales.id, text: sales.date.toString(), cols: 1, rows: 1, color: '#ffffff', productos: false, eliminar: false});
    this.tileVentasRealizadas.push({id: sales.id, text: sales.total.toString(), cols: 1, rows: 1, color: '#ffffff', productos: false, eliminar: false});
    this.tileVentasRealizadas.push({id: sales.id, text: 'Productos', cols: 1, rows: 1, color: '#ffffff', productos: true, eliminar: false});
    this.tileVentasRealizadas.push({id: sales.id, text: 'Eliminar', cols: 1, rows: 1, color: '#ffffff', productos: false, eliminar: true});
  }

  public getTile(){
     return this.tiles;
   }
  public getTileVentas(){
    return this.tilesVentas;
  }

  public getTileVentasRealizadas(){
    return this.tileVentasRealizadas;
  }


  public resetTileVentas() {
    this.tilesVentas = [];
  }

  public resetTileVentasRealizadas() {
    this.tileVentasRealizadas = [];
  }

  public getRegisterForm(): FormGroup{
 return this.registerForm;
  }

  public setRegisterForm(id: number,name: string, price: number): void{
    this.registerForm = this.formBuilder.group({// deben ser igual a los de la interfaz
      id: [id],
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

    public setEditar(editar: boolean): void {
      this.editar = editar;
    }

    public getEditar(): boolean {
      return this.editar;
    }
}
