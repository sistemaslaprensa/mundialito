import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpcionesTitulacionComponent } from './opciones-titulacion.component';

const routes: Routes = [
  {
    path: '',
    component: OpcionesTitulacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpcionesTitulacionRoutingModule { }
