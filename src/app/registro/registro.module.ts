import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { EncabezadoModule } from 'src/app/componentes/encabezado/encabezado.module';

import { RegistroRoutingModule } from './registro-routing.module';
import { RegistroComponent } from './registro.component';



@NgModule({
  declarations: [
    RegistroComponent
  ],
  imports: [
    CommonModule,
    RegistroRoutingModule,    
    NgSelectModule,
    FormsModule,
    RegistroRoutingModule
  ]
})
export class RegistroModule { }
