import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfiguracionValoresArrancelComponent } from './configuracion-valores-arrancel.component';
import { ConfiguracionValoresArrancelRoutingModule } from './configuracion-valores-arrancel-routing.module';
import { EncabezadoModule } from 'src/app/componentes/encabezado/encabezado.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    ConfiguracionValoresArrancelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
    ConfiguracionValoresArrancelRoutingModule,
    EncabezadoModule
  ]
})
export class ConfiguracionValoresArrancelModule { }
