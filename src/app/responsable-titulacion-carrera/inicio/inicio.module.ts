import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';
import { EncabezadoInicioModule } from 'src/app/componentes/encabezado-inicio/encabezado-inicio.module';



@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    EncabezadoInicioModule
  ]
})
export class InicioModule { }
