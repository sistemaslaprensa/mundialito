import { Injectable } from '@angular/core';
import { PeticionesService } from '../comun/peticiones';
import { EntidadRespuesta } from '../comun/EntidadRespuesta';
import { HttpClient } from '@angular/common/http'
import { EntidadFacultad} from './EntidadFacultad';

@Injectable({
  providedIn: 'root'
})
export class InforService {
  constructor(private peticiones: PeticionesService, private http: HttpClient) { 
  }

  GetFacultades() {
    return this.peticiones.ejecutarQueryGet<EntidadRespuesta>(`Infor/GetFacultad`)
  }

//  GuardarOpcionTitulacion(componentesInfor:EntidadFacultad) {
  //  let params= JSON.stringify(componentesInfor)
    // return this.peticiones.ejecutarQueryPost<EntidadRespuesta>(`OpcionTitulacion/GuardarOpcionTitulacion`,params);
   //}
}
