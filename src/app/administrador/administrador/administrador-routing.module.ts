import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorComponent } from './administrador.component';

const routes: Routes = [
  {
    path: '',
    component: AdministradorComponent,

    children: [
      {
        path: 'carreras',
        loadChildren: () => import('../carreras/carreras.module').then(m => m.CarrerasModule) 
      },
      {
        path: 'responsables',
        loadChildren: () => import('../responsables/responsables.module').then(m => m.ResponsablesModule) 
      },
      {
        path: 'opciones-titulacion',
        loadChildren: () => import('../opciones-titulacion/opciones-titulacion.module').then(m => m.OpcionesTitulacionModule) 
      },
      {
        path: 'periodo-matricula',
        loadChildren: () => import('../periodo-matricula/periodo-matricula.module').then(m => m.PeriodoMatriculaModule) 
      },
      {
        path: 'tipo-matricula',
        loadChildren: () => import('../tipo-matricula/tipo-matricula.module').then(m => m.TipoMatriculaModule) 
      },
      {
        path: 'inicio',
        loadChildren: () => import('../inicio/inicio.module').then(m => m.InicioModule) 
      },      
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }