import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatriculacionComponent } from './matriculacion.component';
import { MatriculacionRoutingModule } from './matriculacion-routing.module';

@NgModule({
  declarations: [
    MatriculacionComponent
  ],
  imports: [
    CommonModule,
    MatriculacionRoutingModule
  ]
})

export class MatriculacionModule { }
