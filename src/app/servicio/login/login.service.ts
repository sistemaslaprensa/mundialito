import { Injectable } from '@angular/core';
import { EntidadLogin } from './EntidadLogin';
import { EntidadRespuesta } from '../comun/EntidadRespuesta';
import { PeticionesService } from '../comun/peticiones';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(public peticiones: PeticionesService) { }

  Registrar(entidadRegistroLogin: EntidadLogin) {
    let params = JSON.stringify(entidadRegistroLogin)
    return this.peticiones.ejecutarQueryPost<EntidadRespuesta>(`Login/Registrar`, params)
  }

  IniciarSesion(entidadInicioLogin: EntidadLogin) {
    let params = JSON.stringify(entidadInicioLogin);
    return this.peticiones.ejecutarQueryPost<EntidadRespuesta>(`Login/IniciarSesion`, params);
  }

  // GetIdentity() {
  //   let identity = localStorage.getItem("identity");
  //   return identity !== "undefined" ? JSON.parse(identity) : null;
  // }

  GetIdentity() {
    let resultado: any;
    let identity = localStorage.getItem("identity");
    if (identity != "undefined") {
      resultado = identity;
    } else {
      resultado = null;
    }
    return resultado
  }

  CerrarSesion(){
    localStorage.removeItem("identity");
    localStorage.clear();
  }
}
