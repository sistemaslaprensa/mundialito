import { Injectable } from '@angular/core';
import { PeticionesService } from '../comun/peticiones';
import { HttpClient } from '@angular/common/http';
import { EntidadRespuesta } from '../comun/EntidadRespuesta';
import { EntidadTipoMatricula } from './EntidadTipoMatricula';

@Injectable({
  providedIn: 'root'
})
export class TipoMatriculaService {

  constructor(private peticiones: PeticionesService, private http: HttpClient) {
  }

  GetTipoMatricula() {
    return this.peticiones.ejecutarQueryGet<EntidadRespuesta>(`TipoMatricula/ObtenerTipoMatricula`)
  }

  GuardarTipoMatricula(componentesTipoMatricula: EntidadTipoMatricula) {
    let params = JSON.stringify(componentesTipoMatricula)
    return this.peticiones.ejecutarQueryPost<EntidadRespuesta>(`TipoMatricula/GuardarTipoMatricula`, params);
  }
}
