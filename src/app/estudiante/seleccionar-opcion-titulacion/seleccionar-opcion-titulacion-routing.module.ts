import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SeleccionarOpcionTitulacionComponent } from './seleccionar-opcion-titulacion.component';


const routes: Routes = [
  {  
    path: '',
    component: SeleccionarOpcionTitulacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SeleccionarOpcionTitulacionRoutingModule { }
