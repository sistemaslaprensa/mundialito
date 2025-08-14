import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AprobacionMatriculaEstudianteComponent } from './aprobacion-matricula-estudiante.component';

const routes: Routes = [
  {  
    path: '',
    component: AprobacionMatriculaEstudianteComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AprobacionMatriculaEstudianteRoutingModule { }
