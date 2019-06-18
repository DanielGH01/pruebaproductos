import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { ViewimageComponent } from './viewimage/viewimage.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@NgModule({
  declarations: [ViewimageComponent, ProgressbarComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  exports: [ViewimageComponent, ProgressbarComponent],
  bootstrap: [ViewimageComponent, ProgressbarComponent]

})
export class SharedModule { }
