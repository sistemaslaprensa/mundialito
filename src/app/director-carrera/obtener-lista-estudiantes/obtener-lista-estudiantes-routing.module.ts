import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ObtenerListaEstudiantesComponent } from './obtener-lista-estudiantes.component';


const routes: Routes = [
  {  
    path: '',
    component: ObtenerListaEstudiantesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObtenerListaEstudiantesRoutingModule { }
