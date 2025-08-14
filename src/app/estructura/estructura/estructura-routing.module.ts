import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstructuraComponent } from './estructura.component'; 

const routes: Routes = [
  {
    path: '',
    component: EstructuraComponent,
  },
    // children: [
      {
        path: 'header',
        loadChildren: () => import('../header/header.module').then(m => m.HeaderModule)
      },
      {
        path: 'navigation',
        loadChildren: () => import('../navigation/navigation.module').then(m => m.NavigationModule)
      },
      {
        path: 'footer',
        loadChildren: () => import('../footer/footer.module').then(m => m.FooterModule)
      }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstructuraRoutingModule { }
