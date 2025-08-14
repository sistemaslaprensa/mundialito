import { Injectable } from '@angular/core';
import { PeticionesService } from '../comun/peticiones';
import { EntidadRespuesta } from '../comun/EntidadRespuesta';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EstudianteServiceService {

  constructor(private peticiones: PeticionesService, private http: HttpClient) {
  }

  GetFacultad() {
    return this.peticiones.ejecutarQueryGet<EntidadRespuesta>(`OpcionTitulacion/ObtenerOpcionTitulacion`)
  }

}
