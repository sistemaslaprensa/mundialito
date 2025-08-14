import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ObtenerEstudiantesAprobadosComponent } from './obtener-estudiantes-aprobados.component';

const routes: Routes = [
  {  
    path: '',
    component: ObtenerEstudiantesAprobadosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ObtenerEstudiantesAprobadosRoutingModule { }
