import { Injectable } from '@angular/core';
import { PeticionesService } from '../comun/peticiones';
import { HttpClient } from '@angular/common/http';
import { EntidadRespuesta } from '../comun/EntidadRespuesta';
import { EntidadInformacionServidor } from './EntidadInformacionServidor';
import { EntidadListarResponsables } from './EntidadListarResponsables';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {
  constructor(private peticiones: PeticionesService, private http: HttpClient) {
  }

  GetDecanosApi() {
    return this.peticiones.ejecutarQueryGet<EntidadRespuesta>(`Administrador/ObtenerDecanos`)
  }

  GetDirectoresApi() {
    return this.peticiones.ejecutarQueryGet<EntidadRespuesta>(`Administrador/ObtenerDirectoresCarrera`)
  }

  GetResponbleTiCarreraApi() {
    return this.peticiones.ejecutarQueryGet<EntidadRespuesta>(`Administrador/ObtenerResponsablesTitulacionCarrera`)
  }

  ListaResponsablesVigentes(componentes: EntidadListarResponsables) {
    let params = JSON.stringify(componentes)
    return this.peticiones.ejecutarQueryPost<EntidadRespuesta>(`Administrador/ListaResponsablesVigentes`,params);
  }

  ListaResponsablesNoVigentes(componentes: EntidadListarResponsables) {
    let params = JSON.stringify(componentes)
    return this.peticiones.ejecutarQueryPost<EntidadRespuesta>(`Administrador/ListaResponsablesNoVigentes`,params);
  }

  GuardarOpcionTitulacion(componentesOpcionTitulacion: EntidadInformacionServidor) {
    let params = JSON.stringify(componentesOpcionTitulacion)
    return this.peticiones.ejecutarQueryPost<EntidadRespuesta>(`OpcionTitulacion/GuardarOpcionTitulacion`, params);
  }

  AgregarUsuariosResponsables(usuarios: any[]) {
    let params = JSON.stringify(usuarios);
    return this.peticiones.ejecutarQueryPost<EntidadRespuesta>(`Administrador/AsignarResponsables`, params);
  }  
}
