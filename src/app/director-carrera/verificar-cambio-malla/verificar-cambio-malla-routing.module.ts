import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VerificarCambioMallaComponent } from './verificar-cambio-malla.component';

const routes: Routes = [
  {  
    path: '',
    component: VerificarCambioMallaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class VerificarCambioMallaRoutingModule { }
