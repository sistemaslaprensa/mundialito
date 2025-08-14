import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecretariaCarreraComponent } from './secretaria-carrera.component';

const routes: Routes = [
    {

    path: '',
    component: SecretariaCarreraComponent,
  //},
  children: [
     {
        path: 'inicio',
        loadChildren: () => import('../inicio/inicio.module').then(m => m.InicioModule)
      },
      {
        path: 'matriculacion',
        loadChildren: () => import('../matriculacion/matriculacion.module').then(m => m.MatriculacionModule)
      },
      {
        path: 'obtener-estudiantes-aprobados',
        loadChildren: () => import('../obtener-estudiantes-aprobados/obtener-estudiantes-aprobados.module').then(m => m.ObtenerEstudiantesAprobadosModule)
      },
      {
        path: 'iniciobtener-lista-estudiantes/o',
        loadChildren: () => import('../obtener-lista-estudiantes/obtener-lista-estudiantes.module').then(m => m.ObtenerListaEstudiantesModule)
      },
      {
        path: 'orden-pago',
        loadChildren: () => import('../orden-pago/orden-pago.module').then(m => m.OrdenPagoModule)
      },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class SecretariaCarreraRoutingModule { }
