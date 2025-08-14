import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObtenerSolicitudMatriculaComponent } from './obtener-solicitud-matricula.component';
import { ObtenerSolicitudMatriculaRoutingModule } from './obtener-solicitud-matricula-routing.module';

@NgModule({
  declarations: [
    ObtenerSolicitudMatriculaComponent
  ],
  imports: [
    CommonModule,
    ObtenerSolicitudMatriculaRoutingModule
  ]
})

export class ObtenerSolicitudMatriculaModule { }
