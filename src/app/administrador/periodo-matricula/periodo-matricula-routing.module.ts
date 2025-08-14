import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeriodoMatriculaComponent } from './periodo-matricula.component';

const routes: Routes = [
  {
    path: '',
    component: PeriodoMatriculaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeriodoMatriculaRoutingModule { }
