import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProducListComponent } from './components/product/produc-list/produc-list.component';
import { ProductComponent } from './components/product/product/product.component';
import { ProductSellComponent } from './components/product/product-sell/product-sell.component'
import { SalesComponent } from './components/product/sales/sales.component';
import { RegistroComponent } from './components/usuarios/registro/registro.component';
import { IngresoComponent } from './components/usuarios/ingreso/ingreso.component';


const routes: Routes = [
  {
    path:'', pathMatch: 'full', redirectTo: 'ingreso'
  },
  {
    path: 'venta', component: ProductSellComponent // llama al componente empresa
  },
  {
    path: 'guardar-producto', component: ProductComponent // llama al componente empresa
  },
  {
    path: 'lista-de-productos', component: ProducListComponent // llama al componente empresa
  },
  {
    path: 'ventas-realizadas', component: SalesComponent // llama al componente empresa
  },
  {
    path: 'registro', component: RegistroComponent // llama al componente empresa
  },
  {
    path: 'ingreso', component: IngresoComponent // llama al componente empresa
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
