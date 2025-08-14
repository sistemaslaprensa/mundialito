import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoMatriculaRoutingModule } from './tipo-matricula-routing.module';
import { TipoMatriculaComponent } from './tipo-matricula.component';
import { EncabezadoModule } from 'src/app/componentes/encabezado/encabezado.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [TipoMatriculaComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
    TipoMatriculaRoutingModule,
    EncabezadoModule
  ]
})
export class TipoMatriculaModule { }
