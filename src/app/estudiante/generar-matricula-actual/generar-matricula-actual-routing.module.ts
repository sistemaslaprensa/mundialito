import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GenerarMatriculaActualComponent } from './generar-matricula-actual.component';

const routes: Routes = [
  {  
    path: '',
    component: GenerarMatriculaActualComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class GenerarMatriculaActualRoutingModule { }
