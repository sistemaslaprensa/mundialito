import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncabezadoModule } from 'src/app/componentes/encabezado/encabezado.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
//import { AlertaModule } from 'src/app/componentes/alerta/alerta.module';


import { ConfiguracionesTitulacionComponent } from './configuraciones-titulacion.component';
import { ConfiguracionesTitulacionRoutingModule } from './configuraciones-titulacion-routing.module';
import { HeaderModule } from 'src/app/estructura/header/header.module';

@NgModule({
  declarations: [
    ConfiguracionesTitulacionComponent
  ],
  imports: [
    ConfiguracionesTitulacionRoutingModule,
    CommonModule,
    FormsModule,
    NgSelectModule,
    HeaderModule,
    EncabezadoModule
  ]
})
export class ConfiguracionesTitulacionModule { }
