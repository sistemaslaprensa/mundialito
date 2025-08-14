import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal.component';

const routes: Routes = [
  {
    path: '',
  component:PrincipalComponent,

  children: [
    {
      // path: 'inicio',
      // loadChildren: () => import('../inicio/inicio.module').then(m => m.InicioModule)
    },
  ]
  }
];
  
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
