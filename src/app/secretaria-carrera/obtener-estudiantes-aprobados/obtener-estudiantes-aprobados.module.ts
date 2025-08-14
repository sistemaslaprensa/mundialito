import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObtenerEstudiantesAprobadosComponent } from './obtener-estudiantes-aprobados.component';
import { ObtenerEstudiantesAprobadosRoutingModule } from './obtener-estudiantes-aprobados-routing.module';

@NgModule({
  declarations: [
    ObtenerEstudiantesAprobadosComponent
  ],
  imports: [
    CommonModule,
    ObtenerEstudiantesAprobadosRoutingModule
  ]
})


export class ObtenerEstudiantesAprobadosModule { }
