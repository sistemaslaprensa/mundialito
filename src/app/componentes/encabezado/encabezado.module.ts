import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncabezadoRoutingModule } from './encabezado-routing.module';
import { EncabezadoComponent } from './encabezado.component';


@NgModule({
  declarations: [
    EncabezadoComponent
  ],
  imports: [
    CommonModule,
    EncabezadoRoutingModule
  ],
  exports: [
    EncabezadoComponent
  ]
})
export class EncabezadoModule { }
