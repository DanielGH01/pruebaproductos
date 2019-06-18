import { Component, OnInit } from '@angular/core';
import { ProductServices } from '../providers/product-services.service';
import { Producto } from './model/producto';
import { ProgressbarComponent } from '../shared/progressbar/progressbar.component';
import { MatDialog } from '@angular/material/dialog';
import { ViewimageComponent } from '../shared/viewimage/viewimage.component';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  productos: Producto[];
  constructor(private service: ProductServices, public dialog: MatDialog, public dialogImage: MatDialog) {
    this.productos = new Array<Producto>();
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
      width: '250px',
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


}
