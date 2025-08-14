import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatriculasRoutingModule } from './matriculas-routing.module';
import { MatriculasComponent } from './matriculas.component';
import { EncabezadoModule } from 'src/app/componentes/encabezado/encabezado.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MatriculasComponent
  ],
  imports: [
    CommonModule,
    MatriculasRoutingModule,
    EncabezadoModule,
    FormsModule
  ]
})
export class MatriculasModule { }
