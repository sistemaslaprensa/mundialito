import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdenPagoRoutingModule } from './orden-pago-routing.module';
import { OrdenPagoComponent } from './orden-pago.component';

@NgModule({
  declarations: [
    OrdenPagoComponent
  ],
  imports: [
    CommonModule,
    OrdenPagoRoutingModule
  ]
})

export class OrdenPagoModule { }
