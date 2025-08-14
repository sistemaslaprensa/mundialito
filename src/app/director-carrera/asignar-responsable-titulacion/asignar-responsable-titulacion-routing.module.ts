import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AsignarResponsableTitulacionComponent } from './asignar-responsable-titulacion.component';

const routes: Routes = [
  {  
    path: '',
    component: AsignarResponsableTitulacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AsignarResponsableTitulacionRoutingModule { }
