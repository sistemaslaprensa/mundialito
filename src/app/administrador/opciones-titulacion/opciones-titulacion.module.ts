import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { OpcionesTitulacionRoutingModule } from './opciones-titulacion-routing.module';
import { EncabezadoModule } from 'src/app/componentes/encabezado/encabezado.module';
import { OpcionesTitulacionComponent } from './opciones-titulacion.component';


@NgModule({
  declarations: [OpcionesTitulacionComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
    OpcionesTitulacionRoutingModule,
    EncabezadoModule
  ]
})
export class OpcionesTitulacionModule { }
