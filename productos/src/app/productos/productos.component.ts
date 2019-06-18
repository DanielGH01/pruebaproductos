import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProductServices } from '../providers/product-services.service';
import { Producto } from './model/producto';
import { ProgressbarComponent } from '../shared/progressbar/progressbar.component';
import { MatDialog } from '@angular/material/dialog';
import { ViewimageComponent } from '../shared/viewimage/viewimage.component';
import { MatSelectionList } from '@angular/material/list';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  productos: Producto[];
  seleccionados: Producto[];
  @ViewChild('productosSelect', { static: false }) productosSelect;
  constructor(private service: ProductServices, public dialog: MatDialog, public dialogImage: MatDialog) {
    this.productos = new Array<Producto>();
    this.seleccionados = new Array<Producto>();
  }

  ngOnInit() {
    this.getProductos();
  }

  getProductos() {
    this.openDialogProgress();
    this.service.getProducts().then((res: Producto[]) => {
      this.productos = res;
      this.dialog.closeAll();
    });
  }

  openImage(item: Producto): void {
    const dialogRefImg = this.dialogImage.open(ViewimageComponent, {
      width: 'auto',
      height: 'auto',
      data: item
    });

    dialogRefImg.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialogProgress(): void {
    const dialogRef = this.dialog.open(ProgressbarComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  hacerPedido() {
    this.seleccionados = new Array<Producto>();
    (this.productosSelect.selectedOptions.selected as any[]).forEach(item => {
      this.seleccionados.push((item.value as Producto));
    });

    localStorage.setItem('productosSeleccionados', JSON.stringify(this.seleccionados));
  }

}
