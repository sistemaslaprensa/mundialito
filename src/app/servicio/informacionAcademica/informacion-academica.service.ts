import { Injectable } from '@angular/core';
import { PeticionesService } from '../comun/peticiones';
import { EntidadRespuesta } from '../comun/EntidadRespuesta';
import { HttpClient } from '@angular/common/http'
import { EntidadFacultadEstudiante } from './EntidadFacultadEstudiante';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InformacionAcademicaService {

  constructor(private peticiones: PeticionesService, private http: HttpClient) { 
  }

  GetFacultadesApi() {
    return this.peticiones.ejecutarQueryGet<EntidadRespuesta>(`InformacionAcademica/GetFacultadesApi`)
  }

  GetCarrerasByIdFacultadApi(idFacultad:number) {
    return this.peticiones.ejecutarQueryGet<EntidadRespuesta>(`InformacionAcademica/GetCarrerasByIdFacultadApi/${idFacultad}`)
  }
  
  GetNivelesByIdCarreraApi(idCarrera:number,idSistemaEstudios:number) {
    return this.peticiones.ejecutarQueryGet<EntidadRespuesta>(`InformacionAcademica/GetNivelesByIdCarreraApi/${idCarrera}/${idSistemaEstudios}`)
  }

  GetSistemaEstudiosByIdCarreraApi(idCarrera:number) {
    return this.peticiones.ejecutarQueryGet<EntidadRespuesta>(`InformacionAcademica/GetSistemaEstudiosByIdCarreraApi/${idCarrera}`)
  }

  GetSituacionAcademicaEstudiante(idEstudiante:number) {
    return this.peticiones.ejecutarQueryGet<EntidadRespuesta>(`InformacionAcademica/GetSituacionAcademicaTitulacionEstudiante/${idEstudiante}`)
  }
}
