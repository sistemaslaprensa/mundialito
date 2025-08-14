import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerarSituacionActualComponent } from './generar-situacion-actual.component';

const routes: Routes = [
  {
    path: '',
    component: GenerarSituacionActualComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenerarSituacionActualRoutingModule { }
