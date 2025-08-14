import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DecanoFacultadRoutingModule } from './decano-facultad-routing.module';
import { DecanoFacultadComponent } from './decano-facultad.component';
import { FooterModule } from 'src/app/estructura/footer/footer.module';


@NgModule({
  declarations: [
    DecanoFacultadComponent
  ],
  imports: [
    CommonModule,
    DecanoFacultadRoutingModule,
    FooterModule
  ]
})
export class DecanoFacultadModule { }
