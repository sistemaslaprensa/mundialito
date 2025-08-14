import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecretariaCarreraRoutingModule } from './secretaria-carrera-routing.module';
import { SecretariaCarreraComponent } from './secretaria-carrera.component';
import { FooterModule } from 'src/app/estructura/footer/footer.module';


@NgModule({
  declarations: [
    SecretariaCarreraComponent
  ],
  imports: [
    CommonModule,
    SecretariaCarreraRoutingModule,
    FooterModule
  ]
})
export class SecretariaCarreraModule { }
