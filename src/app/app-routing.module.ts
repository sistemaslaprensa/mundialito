import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component'; 
import { LoginComponent } from './login/login.component';
import { estudianteGuard } from './servicio/guards/estudiante/estudiante.guard';
import { PrincipalComponent } from './principal/principal/principal.component';

const routes: Routes = [
  {
    path: '',
    component: PrincipalComponent, //primera pantalla que se ve 
   },
   {
    path: 'principal',
    loadChildren: () => import('./principal/principal/principal.module').then(m => m.PrincipalModule)
  },
   {
     path: 'login',
     loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
   },
   {
     path: 'registro',
     loadChildren: () => import('./registro/registro.module').then(m => m.RegistroModule)
   },
  {
    path: 'estructura',
     loadChildren: () => import('./estructura/estructura/estructura.module').then(m=>m.EstructuraModule),   
  },
  {
    path: 'administrador',
     loadChildren: () => import('./administrador/administrador/administrador.module').then(m=>m.AdministradorModule),   
  },
  {
    path: 'estudiante',
    loadChildren: () => import('./estudiante/estudiante/estudiante.module').then(m=>m.EstudianteModule),   //canActivate: [estudianteGuard]
  },
  {
    path: 'responsable-carrera',
    loadChildren: () => import('./responsable-titulacion-carrera/responsable-carrera/responsable-carrera.module').then(m=>m.ResponsableCarreraModule),   
  },
  {
    path: 'director-carrera',
    loadChildren: () => import('./director-carrera/director-carrera/director-carrera.module').then(m=>m.DirectorCarreraModule),   
  },
  {
    path: 'secretaria-carrera',
    loadChildren: () => import('./secretaria-carrera/secretaria-carrera/secretaria-carrera.module').then(m=>m.SecretariaCarreraModule),   
  },
  {
    path: 'decano-facultad',
    loadChildren: () => import('./decano-facultad/decano-facultad/decano-facultad.module').then(m=>m.DecanoFacultadModule),   
  },
  {
    path: 'encabezado',
    loadChildren: () => import('./componentes/encabezado/encabezado.module').then(m=>m.EncabezadoModule),   
  },
  {
    path: 'picker',
    loadChildren: () => import('./componentes/datepicker/basic-datepicker/basic-datepicker.module').then(m=>m.BasicDatepickerModule),   
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
