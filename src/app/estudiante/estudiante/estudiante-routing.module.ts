import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudianteComponent } from './estudiante.component';

const routes: Routes = [
  {
    path: '',
    component:EstudianteComponent,

    children: [
      {
        path: 'inicio',
        loadChildren: () => import('../inicio/inicio.module').then(m => m.InicioModule)
      },
      {
        path: 'matriculas',
        loadChildren: () => import('../matriculas/matriculas.module').then(m => m.MatriculasModule)
      },
      {
        path: 'generar-matricula-actual',
        loadChildren: () => import('../generar-matricula-actual/generar-matricula-actual.module').then(m => m.GenerarMatriculaActualModule)
      },
      {
        path: 'generar-situacion-actual',
        loadChildren: () => import('../generar-situacion-actual/generar-situacion-actual.module').then(m => m.GenerarSituacionActualModule)
      },
      {
        path: 'seleccionar-opcion-titulacion',
        loadChildren: () => import('../seleccionar-opcion-titulacion/seleccionar-opcion-titulacion.module').then(m => m.SeleccionarOpcionTitulacionModule)
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudianteRoutingModule { }
