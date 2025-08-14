import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ObtenerSolicitudesRevisionMallaComponent } from './obtener-solicitudes-revision-malla.component';

const routes: Routes = [
  {  
    path: '',
    component: ObtenerSolicitudesRevisionMallaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ObtenerSolicitudesRevisionMallaRoutingModule { }
