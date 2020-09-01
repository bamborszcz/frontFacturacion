import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { HeadButtonsComponent } from './components/head/head-buttons/head-buttons.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';

import { ProductComponent } from './components/product/product/product.component';
import { ProducListComponent } from './components/product/produc-list/produc-list.component';
import { ProductSellComponent } from './components/product/product-sell/product-sell.component';
import { SalesComponent } from './components/product/sales/sales.component';

import {  ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { IngresoComponent } from './components/usuarios/ingreso/ingreso.component';
import { RegistroComponent } from './components/usuarios/registro/registro.component';
@NgModule({
  declarations: [
    AppComponent,
    HeadButtonsComponent,
    ProductComponent,
    ProducListComponent,
    ProductSellComponent,
    SalesComponent,
    IngresoComponent,
    RegistroComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSliderModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
