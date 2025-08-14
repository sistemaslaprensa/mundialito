import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { ConfiguracionOpcionesTitulacionRoutingModule } from './configuracion-opciones-titulacion-routing.module'; 
import { ConfiguracionOpcionesTitulacionComponent } from './configuracion-opciones-titulacion.component'; 
import { EncabezadoModule } from 'src/app/componentes/encabezado/encabezado.module';


@NgModule({
  declarations: [
    ConfiguracionOpcionesTitulacionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
    ConfiguracionOpcionesTitulacionRoutingModule,
   EncabezadoModule

  ]
})
export class ConfiguracionOpcionesTitulacionModule { }
