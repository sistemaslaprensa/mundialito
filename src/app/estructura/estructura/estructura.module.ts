import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstructuraRoutingModule } from './estructura-routing.module';
import { EstructuraComponent } from './estructura.component';
import { HeaderModule } from '../header/header.module';
import { NavigationModule } from '../navigation/navigation.module';
import { FooterModule } from '../footer/footer.module';
import { EncabezadoInicioModule } from 'src/app/componentes/encabezado-inicio/encabezado-inicio.module';



@NgModule({
  declarations: [
    EstructuraComponent
  ],
  imports: [
    CommonModule,
    EstructuraRoutingModule,
    HeaderModule, // Importa el módulo del encabezado aquí
    NavigationModule,
    FooterModule,
    EncabezadoInicioModule
  ],
   //exports: [EstructuraComponent]
})
export class EstructuraModule { }
