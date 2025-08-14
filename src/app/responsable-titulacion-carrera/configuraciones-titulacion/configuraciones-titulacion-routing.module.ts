import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConfiguracionesTitulacionComponent } from './configuraciones-titulacion.component';

const routes: Routes = [
  {
    path: '',
    component: ConfiguracionesTitulacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ConfiguracionesTitulacionRoutingModule { }
