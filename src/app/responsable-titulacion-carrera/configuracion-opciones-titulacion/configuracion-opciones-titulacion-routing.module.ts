import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConfiguracionOpcionesTitulacionComponent } from './configuracion-opciones-titulacion.component'; 

const routes: Routes = [
  {
    path: '',
    component: ConfiguracionOpcionesTitulacionComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ConfiguracionOpcionesTitulacionRoutingModule { }
