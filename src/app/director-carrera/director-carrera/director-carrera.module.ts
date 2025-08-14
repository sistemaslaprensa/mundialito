import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectorCarreraRoutingModule } from './director-carrera-routing.module';
import { DirectorCarreraComponent } from './director-carrera.component';
import { FooterModule } from 'src/app/estructura/footer/footer.module';


@NgModule({
  declarations: [
    DirectorCarreraComponent
  ],
  imports: [
    CommonModule,
    DirectorCarreraRoutingModule,
    FooterModule
  ]
})
export class DirectorCarreraModule { }
