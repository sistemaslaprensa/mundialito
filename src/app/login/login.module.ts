import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { EncabezadoModule } from 'src/app/componentes/encabezado/encabezado.module';

import { LoginRoutingModule } from './login-routing.module';
import  { LoginComponent} from './login.component';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    NgSelectModule,
    EncabezadoModule,
  ]
})
export class LoginModule { 

}
