import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/produdc.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder, public productService: ProductService) { }

  ngOnInit(): void {
  }

  public navListaProducto (): void{
    this.router.navigate(['/lista-de-productos']);

  }

  public saveProduct() {

    if(this.productService.getEditar()===false){
       this.productService.saveProduct(this.productService.getRegisterForm().value).toPromise().then((data: any) => {
      console.log(data);

    });


    } else if (this.productService.getEditar()===true) {
      this.productService.editProduct(this.productService.getRegisterForm().value).toPromise().then((data: any) => {
        console.log(data);
      });

    }

    this.productService.setRegisterForm(null,'',null); // limpio el formulario despues de usarlo


  }
}
