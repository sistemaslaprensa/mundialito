import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObtenerListaEstudiantesComponent } from './obtener-lista-estudiantes.component';
import { ObtenerListaEstudiantesRoutingModule } from './obtener-lista-estudiantes-routing.module';

@NgModule({
  declarations: [
    ObtenerListaEstudiantesComponent
  ],
  imports: [
    CommonModule,
    ObtenerListaEstudiantesRoutingModule
  ]
})


export class ObtenerListaEstudiantesModule { }
