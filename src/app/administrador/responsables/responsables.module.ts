import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResponsablesRoutingModule } from './responsables-routing.module';
import { ResponsablesComponent } from './responsables.component';
import { EncabezadoModule } from 'src/app/componentes/encabezado/encabezado.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [ResponsablesComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
    ResponsablesRoutingModule,
    EncabezadoModule
  ]
})
export class ResponsablesModule { }
