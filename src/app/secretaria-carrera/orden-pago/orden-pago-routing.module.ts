import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OrdenPagoComponent } from './orden-pago.component';

const routes: Routes = [
  {  
    path: '',
    component: OrdenPagoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class OrdenPagoRoutingModule { }
