import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectorCarreraComponent } from './director-carrera.component';

const routes: Routes = [
  {  
    path: '',
    component: DirectorCarreraComponent,

    children: [
      {
        path: 'inicio',
        loadChildren: () => import('../inicio/inicio.module').then(m => m.InicioModule)
      },
      {
        path: 'asignar-responsable-titulacion',
        loadChildren: () => import('../asignar-responsable-titulacion/asignar-responsable-titulacion.module').then(m => m.AsignarResponsableTitulacionModule)
      },
      {
        path: 'obtener-lista-estudiantes',
        loadChildren: () => import('../obtener-lista-estudiantes/obtener-lista-estudiantes.module').then(m => m.ObtenerListaEstudiantesModule)
      },
      {
        path: 'obtener-solicitudes-revision-malla',
        loadChildren: () => import('../obtener-solicitudes-revision-malla/obtener-solicitudes-revision-malla.module').then(m => m.ObtenerSolicitudesRevisionMallaModule)
      },
      {
        path: 'verificar-cambio-malla',
        loadChildren: () => import('../verificar-cambio-malla/verificar-cambio-malla.module').then(m => m.VerificarCambioMallaModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectorCarreraRoutingModule { }
