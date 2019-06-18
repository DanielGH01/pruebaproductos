import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductosComponent } from './productos/productos.component';
import { ProductServices } from './providers/product-services.service';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';

import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatDialogModule,
    SharedModule
  ],
  providers: [ProductServices],
  bootstrap: [
    AppComponent,
    // ProgressbarComponent,
    // ViewimageComponent
  ]
})
export class AppModule { }
