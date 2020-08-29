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

 /* registerForm = this.formBuilder.group({// deben ser igual a los de la interfaz
    id: null,
    name: [''],
    price: [],
    quantity: []
    });*/
  ngOnInit(): void {
  }

  public navListaProducto (): void{
    this.router.navigate(['/lista-de-productos']);
  }

  public saveProduct() {
    //console.log(this.registerForm.value);
    console.log(this.productService.getRegisterForm().value);


    this.productService.loadProduct(this.productService.getRegisterForm().value).toPromise().then((data: any) => {
      console.log(data);

    });
    this.productService.setRegisterForm('',null); // limpio el formulario despues de usarlo

  }
}
