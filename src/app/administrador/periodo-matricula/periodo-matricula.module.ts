import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeriodoMatriculaRoutingModule } from './periodo-matricula-routing.module';
import { EncabezadoModule } from 'src/app/componentes/encabezado/encabezado.module';
import { PeriodoMatriculaComponent } from './periodo-matricula.component';
import { BasicDatepickerModule } from 'src/app/componentes/datepicker/basic-datepicker/basic-datepicker.module';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    PeriodoMatriculaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
    PeriodoMatriculaRoutingModule,
    EncabezadoModule,
    BasicDatepickerModule,
    MatDatepickerModule,
    MatInputModule
  ],
})
export class PeriodoMatriculaModule { }