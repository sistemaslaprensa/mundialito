import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfiguracionSecuenciaPeriodoComponent } from './configuracion-secuencia-periodo.component';

const routes: Routes = [
  {  
    path: '',
    component: ConfiguracionSecuenciaPeriodoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ConfiguracionSecuenciaPeriodoRoutingModule { }
