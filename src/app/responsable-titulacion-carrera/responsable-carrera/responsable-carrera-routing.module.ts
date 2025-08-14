import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResponsableCarreraComponent } from './responsable-carrera.component';

const routes: Routes = [
  {
    path: '',
    component: ResponsableCarreraComponent,
    children: [
      {
        path: 'inicio',
        loadChildren: () => import('../inicio/inicio.module').then(m => m.InicioModule)      
      },
      {
        path: 'configuraciones-titulacion',
        loadChildren: () => import('../configuraciones-titulacion/configuraciones-titulacion.module').then(m => m.ConfiguracionesTitulacionModule)      
      },
      {
        path: 'configuracion-opciones-titulacion',
        loadChildren: () => import('../configuracion-opciones-titulacion/configuracion-opciones-titulacion.module').then(m => m.ConfiguracionOpcionesTitulacionModule)      
      },
      {
        path: 'configuracion-secuencia-periodo',
        loadChildren: () => import('../configuracion-secuencia-periodo/configuracion-secuencia-periodo.module').then(m => m.ConfiguracionSecuenciaPeriodoModule)      
      },
      {
        path: 'configuracion-valores-arrancel',
        loadChildren: () => import('../configuracion-valores-arrancel/configuracion-valores-arrancel.module').then(m => m.ConfiguracionValoresArrancelModule)      
      },
     ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ResponsableCarreraRoutingModule { }
