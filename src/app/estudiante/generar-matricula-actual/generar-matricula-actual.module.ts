import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerarMatriculaActualComponent } from './generar-matricula-actual.component';
import { GenerarMatriculaActualRoutingModule } from './generar-matricula-actual-routing.module';
import { EncabezadoModule } from 'src/app/componentes/encabezado/encabezado.module';

@NgModule({
  declarations: [
    GenerarMatriculaActualComponent
  ],
  imports: [
    CommonModule,
    GenerarMatriculaActualRoutingModule,
    EncabezadoModule
  ]
})


export class GenerarMatriculaActualModule { }
