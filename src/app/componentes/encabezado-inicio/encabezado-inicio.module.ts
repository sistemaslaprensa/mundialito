import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EncabezadoInicioRoutingModule } from './encabezado-inicio-routing.module';
import { EncabezadoInicioComponent } from './encabezado-inicio.component';


@NgModule({
  declarations: [EncabezadoInicioComponent],
  imports: [
    CommonModule,
    EncabezadoInicioRoutingModule
  ],
  exports: [EncabezadoInicioComponent]
})
export class EncabezadoInicioModule { }
