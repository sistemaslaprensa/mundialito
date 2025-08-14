import { Injectable } from '@angular/core';
import { PeticionesService } from '../comun/peticiones';
import { HttpClient } from '@angular/common/http';
import { EntidadRespuesta } from '../comun/EntidadRespuesta';
import { EntidadConfiguracionTitulacion } from './EntidadConfiguracionTitulacion';

@Injectable({
  providedIn: 'root'
})
export class ResponsabletitulacionServiceService {
  constructor(private peticiones: PeticionesService, private http: HttpClient) {
  }
  
  GuardarOpcionTitulacionCarrera(componente: EntidadConfiguracionTitulacion) {
    let params = JSON.stringify(componente)
    return this.peticiones.ejecutarQueryPost<EntidadRespuesta>(`ResponsableTitulacion/AgregarOpcionTitulacionCarrera`, params);
  }

  ObtenerSecuenciaPeriodoByCarrera(idCarrera: number) {
    return this.peticiones.ejecutarQueryGet<EntidadRespuesta>(`ResponsableTitulacion/ObtenerInfoSecuenciaPeriodoByCarrera/${idCarrera}`)
  }
  
}
