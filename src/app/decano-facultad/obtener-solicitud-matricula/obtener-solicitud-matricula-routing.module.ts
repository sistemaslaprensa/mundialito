import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ObtenerSolicitudMatriculaComponent } from './obtener-solicitud-matricula.component';

const routes: Routes = [
  {  
    path: '',
    component: ObtenerSolicitudMatriculaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ObtenerSolicitudMatriculaRoutingModule { }
