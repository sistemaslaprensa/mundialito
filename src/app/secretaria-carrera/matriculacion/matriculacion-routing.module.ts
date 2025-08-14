import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatriculacionComponent } from './matriculacion.component';

const routes: Routes = [
  {  
    path: '',
    component: MatriculacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MatriculacionRoutingModule { }
