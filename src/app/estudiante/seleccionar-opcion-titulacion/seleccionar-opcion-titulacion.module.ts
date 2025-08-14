import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeleccionarOpcionTitulacionComponent } from './seleccionar-opcion-titulacion.component';
import { SeleccionarOpcionTitulacionRoutingModule } from './seleccionar-opcion-titulacion-routing.module';
import { EncabezadoModule } from 'src/app/componentes/encabezado/encabezado.module';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    SeleccionarOpcionTitulacionComponent
  ],
  imports: [
    SeleccionarOpcionTitulacionRoutingModule,

    CommonModule,    
    EncabezadoModule,    
    FormsModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatStepperModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule

  ]
})
export class SeleccionarOpcionTitulacionModule { }
