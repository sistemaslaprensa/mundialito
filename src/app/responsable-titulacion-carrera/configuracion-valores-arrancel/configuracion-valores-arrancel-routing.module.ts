import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ConfiguracionValoresArrancelComponent } from './configuracion-valores-arrancel.component';

const routes: Routes = [
  {  
    path: '',
    component: ConfiguracionValoresArrancelComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ConfiguracionValoresArrancelRoutingModule { }
