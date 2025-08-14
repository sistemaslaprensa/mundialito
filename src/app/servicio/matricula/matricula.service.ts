import { Injectable } from '@angular/core';
import { PeticionesService } from '../comun/peticiones';
import { HttpClient } from '@angular/common/http';
import { EntidadRespuesta } from '../comun/EntidadRespuesta';
import { Observable } from 'rxjs';
import { EntidadMatriculaTitulacion } from './EntidadMatriculaTitulacion';

@Injectable({
  providedIn: 'root'
})
export class MatriculaService {

  constructor(private peticiones: PeticionesService, private http: HttpClient) { 
  }
  
  BoolNivelSeleccionOpcionEstudiante(idEstudiante: number){
    return this.peticiones.ejecutarQueryGet<EntidadRespuesta>(`MatriculaTitulacion/BoolNivelSeleccionOpcionEstudiante/${idEstudiante}`);
  }

  // BoolInicioTitulacionEstudiante(idEstudiante: number){
  //   return this.peticiones.ejecutarQueryGet<EntidadRespuesta>(`MatriculaTitulacion/BoolInicioTitulacionEstudiante/${idEstudiante}`);
  // }

  BoolMatriculaTitulacionEstudiante(idEstudiante: number){
    return this.peticiones.ejecutarQueryGet<EntidadRespuesta>(`MatriculaTitulacion/BoolMatriculaTitulacionEstudiante/${idEstudiante}`);
  }

  BoolSeleccionOpcionEstudiante(idEstudiante: number){
    return this.peticiones.ejecutarQueryGet<EntidadRespuesta>(`MatriculaTitulacion/BoolSeleccionOpcionEstudiante/${idEstudiante}`);
  }

  GetSituacionActualTitulacionEstudiante(idEstudiante: number){
    return this.peticiones.ejecutarQueryGet<EntidadRespuesta>(`MatriculaTitulacion/GetSituacionActualTitulacionEstudiante/${idEstudiante}`);
  }

  GetMatriculaVigenteTitulacionEstudiante(idEstudiante: number){
    return this.peticiones.ejecutarQueryGet<EntidadRespuesta>(`MatriculaTitulacion/GetMatriculaVigenteTitulacionEstudiante/${idEstudiante}`);
  }

  GetMatriculasTitulacionEstudiante(idEstudiante: number){
    return this.peticiones.ejecutarQueryGet<EntidadRespuesta>(`MatriculaTitulacion/GetMatriculasTitulacionEstudiante/${idEstudiante}`);
  }

  GetNuevaMatriculaInfo(idEstudiante: number){
    return this.peticiones.ejecutarQueryGet<EntidadRespuesta>(`MatriculaTitulacion/GetNuevaMatriculaInfo/${idEstudiante}`);
  }

  GetOrdenPagoInfo(idMatricula: number){
    return this.peticiones.ejecutarQueryGet<EntidadRespuesta>(`MatriculaTitulacion/GetOrdenPagoInfo/${idMatricula}`);
  }
  /*POST*/

  GuardarMatricula(componente: EntidadMatriculaTitulacion) {
    let params = JSON.stringify(componente)
    return this.peticiones.ejecutarQueryPost<EntidadRespuesta>(`MatriculaTitulacion/GuardarMatriculaTitulacion`, params);
  }

}
