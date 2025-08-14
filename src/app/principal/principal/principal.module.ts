import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { EncabezadoInicioModule } from 'src/app/componentes/encabezado-inicio/encabezado-inicio.module';
import { PrincipalComponent } from './principal.component';


@NgModule({
  declarations: [
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    EncabezadoInicioModule
  ]
})
export class PrincipalModule { }
