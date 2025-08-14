import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecanoFacultadComponent } from './decano-facultad.component';

const routes: Routes = [
  {
    path: '',
    component: DecanoFacultadComponent,

    children: [
      {
        path: 'aprobacion-matricula-estudiante',
        loadChildren: () => import('../aprobacion-matricula-estudiante/aprobacion-matricula-estudiante.module').then(m => m.AprobacionMatriculaEstudianteModule)
      },
      {
        path: 'historial-asistencia',
        loadChildren: () => import('../obtener-lista-estudiantes/obtener-lista-estudiantes.module').then(m => m.ObtenerListaEstudiantesModule)
      },
      {
        path: 'historial-asistencia',
        loadChildren: () => import('../obtener-solicitud-matricula/obtener-solicitud-matricula.module').then(m => m.ObtenerSolicitudMatriculaModule)
      },
      {
        path: 'inicio',
        loadChildren: () => import('../inicio/inicio.module').then(m => m.InicioModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DecanoFacultadRoutingModule { }
