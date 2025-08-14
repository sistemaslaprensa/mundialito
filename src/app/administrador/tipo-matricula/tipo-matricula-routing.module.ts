import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoMatriculaComponent } from './tipo-matricula.component';

const routes: Routes = [
  {
    path: '',
    component: TipoMatriculaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoMatriculaRoutingModule { }
