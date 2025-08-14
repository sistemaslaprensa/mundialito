import { Injectable } from '@angular/core';
import { PeticionesService } from '../comun/peticiones';
import { EntidadRespuesta } from '../comun/EntidadRespuesta';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  constructor(public peticiones: PeticionesService) { }
  
  ListarRol() {
    return this.peticiones.ejecutarQueryGet<EntidadRespuesta>(`Login/TipoRol`);
  }
}
