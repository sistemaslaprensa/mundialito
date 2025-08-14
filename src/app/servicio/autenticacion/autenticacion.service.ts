import { Injectable } from '@angular/core';
import { PeticionesService } from '../comun/peticiones';
import { EntidadRespuesta } from '../comun/EntidadRespuesta';
import { HttpClient } from '@angular/common/http'
import { EntidadUsuario } from './EntidadUsuario';


@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(private peticiones: PeticionesService, private http: HttpClient) { }
  
  GetUsuarios() {
    return this.peticiones.ejecutarQueryGet<EntidadRespuesta>(`Autenticacion/ObtenerUsuariosBDLocal`)
  }

}
