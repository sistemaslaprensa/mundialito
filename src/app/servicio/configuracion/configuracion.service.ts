import { Injectable } from '@angular/core';
import { PeticionesService } from '../comun/peticiones';
import { HttpClient } from '@angular/common/http';
import { EntidadConfiguracionCarrera } from './EntidadConfiguracionCarrera';
import { EntidadRespuesta } from '../comun/EntidadRespuesta';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService {

  constructor(private peticiones: PeticionesService, private http: HttpClient) { }

  GuardarConfiguracionCarrera(entidadConfiguracionCarrera:EntidadConfiguracionCarrera){
    let params = JSON.stringify(entidadConfiguracionCarrera)
    return this.peticiones.ejecutarQueryPost<EntidadRespuesta>(`ConfiguracionCarrera/GuardarConfiguracionCarrera`, params);  }

  GetConfiguracionCarreraByCarrera(idCarrera:number) {
    return this.peticiones.ejecutarQueryGet<EntidadRespuesta>(`ConfiguracionCarrera/GetConfiguracionCarreraByCarrera/${idCarrera}`)
  }
}
