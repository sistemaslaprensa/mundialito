import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgSelectModule } from '@ng-select/ng-select';
import { BasicDatepickerComponent } from './componentes/datepicker/basic-datepicker/basic-datepicker.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { PrincipalComponent } from './principal/principal/principal.component';
import { CampeonatoComponent } from './administrador/campeonato/campeonato.component';
import { TiposCampeonatoComponent } from './administrador/tipos-campeonato/tipos-campeonato.component';

@NgModule({
    declarations: [
        AppComponent,
        CampeonatoComponent,
        TiposCampeonatoComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule, HttpClientModule,
        FormsModule, BrowserAnimationsModule, ReactiveFormsModule, MatFormFieldModule, NgSelectModule,
        MatDatepickerModule, MatNativeDateModule // Importa este módulo para el datapicker
    ]
})
export class AppModule { }
