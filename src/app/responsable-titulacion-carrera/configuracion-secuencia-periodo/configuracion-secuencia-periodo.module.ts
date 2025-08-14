import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfiguracionSecuenciaPeriodoRoutingModule } from './configuracion-secuencia-periodo-routing.module';
import { ConfiguracionSecuenciaPeriodoComponent } from './configuracion-secuencia-periodo.component';
import { EncabezadoModule } from 'src/app/componentes/encabezado/encabezado.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    ConfiguracionSecuenciaPeriodoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
    ConfiguracionSecuenciaPeriodoRoutingModule,
    EncabezadoModule
  ]
})
export class ConfiguracionSecuenciaPeriodoModule { }
