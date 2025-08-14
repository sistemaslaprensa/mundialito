import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';

//import { EncabezadoModule } from 'src/app/componentes/encabezado/encabezado.module';
import { NgSelectModule } from '@ng-select/ng-select';
//import { AlertaModule } from 'src/app/componentes/alerta/alerta.module';

import { GenerarSituacionActualRoutingModule } from './generar-situacion-actual-routing.module';
import { GenerarSituacionActualComponent } from './generar-situacion-actual.component';
import { EncabezadoModule } from 'src/app/componentes/encabezado/encabezado.module';


@NgModule({
  declarations: [
    GenerarSituacionActualComponent
  ],
  imports: [
    GenerarSituacionActualRoutingModule,
    CommonModule,
    EncabezadoModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class GenerarSituacionActualModule {}
