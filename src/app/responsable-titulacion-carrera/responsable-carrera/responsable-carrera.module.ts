import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResponsableCarreraRoutingModule } from './responsable-carrera-routing.module';
import { ResponsableCarreraComponent } from './responsable-carrera.component';
import { FooterModule } from 'src/app/estructura/footer/footer.module';

@NgModule({
    declarations: [
        ResponsableCarreraComponent
    ],
    imports: [
        CommonModule,
        ResponsableCarreraRoutingModule,        
       FooterModule
    ],
    exports:[
        ResponsableCarreraComponent
    ]
})
export class ResponsableCarreraModule { }
