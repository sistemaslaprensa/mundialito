import { Injectable } from '@angular/core';
import { PeticionesService } from '../comun/peticiones';
import { HttpClient } from '@angular/common/http';
import { EntidadRespuesta } from '../comun/EntidadRespuesta';

@Injectable({
  providedIn: 'root'
})
export class PeriodoService {

  constructor(private peticiones: PeticionesService, private http: HttpClient) {
  }

  GetPeriodoVigente() {
    return this.peticiones.ejecutarQueryGet<EntidadRespuesta>(`Periodo/PeriodoVigenteFacultad`)
  }

  GetPeriodosFacultadTitulacion() {
    return this.peticiones.ejecutarQueryGet<EntidadRespuesta>(`Periodo/PeriodosFacultadTitulacion`)
  }

  GetPeriodosVigentesTitulacion() {
    return this.peticiones.ejecutarQueryGet<EntidadRespuesta>(`Periodo/PeriodosVigentesTitulacion`)
  }
}
