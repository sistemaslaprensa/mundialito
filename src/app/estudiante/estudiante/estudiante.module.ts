import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudianteRoutingModule } from './estudiante-routing.module';
import { EstudianteComponent } from './estudiante.component';
import { FooterModule } from 'src/app/estructura/footer/footer.module';


@NgModule({
  declarations: [
    EstudianteComponent
  ],
  imports: [
    CommonModule,
    EstudianteRoutingModule,
    FooterModule
  ]
})
export class EstudianteModule { }
