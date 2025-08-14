import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { BasicDatepickerComponent } from './basic-datepicker.component';
import { BasicDatepickerRoutingModule } from './basic-datepicker-routing.module';

@NgModule({
  declarations: [
    BasicDatepickerComponent
  ],
  imports: [
    CommonModule,
    BasicDatepickerRoutingModule,
    MatDatepickerModule,
    MatInputModule
  ],
  exports: [
    BasicDatepickerComponent
  ]
})
export class BasicDatepickerModule { }
