import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { FooterModule } from 'src/app/estructura/footer/footer.module';
import { AdministradorComponent } from './administrador.component';


@NgModule({
  declarations: [
    AdministradorComponent
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    FooterModule
  ],
  exports: [
    AdministradorComponent
  ]
})
export class AdministradorModule { }
