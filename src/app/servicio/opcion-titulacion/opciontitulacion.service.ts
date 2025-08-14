import { Injectable } from '@angular/core';
import { PeticionesService } from '../comun/peticiones';
import { EntidadRespuesta } from '../comun/EntidadRespuesta';
import { HttpClient } from '@angular/common/http'
import { EntidadOpcionTitulacion } from './EntidadOpcionTitulacion';
import { EntidadRegistroSeleccion } from './EntidadRegistroSeleccion';

@Injectable({
  providedIn: 'root'
})
export class OpciontitulacionService {
  constructor(private peticiones: PeticionesService, private http: HttpClient) {
  }

  GetOpcionTitulacion() {
    return this.peticiones.ejecutarQueryGet<EntidadRespuesta>(`OpcionTitulacion/ObtenerOpcionesTitulacionBD`)
  }

  GetOpcionTitulacionPorCarrera(idCarrera: number) {
    return this.peticiones.ejecutarQueryGet<EntidadRespuesta>(`OpcionTitulacion/GetOpcionTitulacionPorCarrera/${idCarrera}`)
  }

 

  ObtenerOpcionesTitulacionPorCarrera(idCarrera: number) {
    return this.peticiones.ejecutarQueryGet<EntidadRespuesta>(`OpcionTitulacion/GetOpcionTitulacionPorCarrera/${idCarrera}`);
  }

  ObtenerSeleccionOpcionEstudiante(idEstudiante: number) {
    return this.peticiones.ejecutarQueryGet<EntidadRespuesta>(`OpcionTitulacion/ObtenerSeleccionOpcionEstudiante/${idEstudiante}`);
  }

  GuardarOpcionTitulacion(componente: EntidadOpcionTitulacion) {
    let params = JSON.stringify(componente)
    return this.peticiones.ejecutarQueryPost<EntidadRespuesta>(`OpcionTitulacion/GuardarOpcionTitulacion`, params);
  }

  GuardarOpcionTitulacionEstudiante(componente: EntidadRegistroSeleccion) {
    let params = JSON.stringify(componente)
    return this.peticiones.ejecutarQueryPost<EntidadRespuesta>(`OpcionTitulacion/GuardarSeleccionEstudianteOpcionTitulacion`, params);
  }
}