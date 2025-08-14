import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrerasRoutingModule } from './carreras-routing.module';
import { EncabezadoModule } from 'src/app/componentes/encabezado/encabezado.module';
import { CarrerasComponent } from './carreras.component';


@NgModule({
  declarations: [
    CarrerasComponent
  ],
  imports: [
    CommonModule,
    CarrerasRoutingModule,
    EncabezadoModule
  ]
})
export class CarrerasModule { }
