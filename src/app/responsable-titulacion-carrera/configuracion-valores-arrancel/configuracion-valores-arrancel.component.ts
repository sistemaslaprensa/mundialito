import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Mensajes } from 'src/app/infraestructura/mensajes';
import { TipoMatriculaService } from 'src/app/servicio/tipoMatricula/tipo-matricula.service';

@Component({
  selector: 'app-configuracion-valores-arrancel',
  templateUrl: './configuracion-valores-arrancel.component.html',
  styleUrls: ['./configuracion-valores-arrancel.component.scss']
})
export class ConfiguracionValoresArrancelComponent {
  txt_nivel1: string="Inicio"
  txt_nivel2: string="Configuración"
  txt_nivel3: string="Valores de Arrancel"
  txt_titulo: string = "Valores de Arrancel"
  txt_subtitulo: string = "Responsable de titulación por carrera"

  public vecTipoMatricula:Array<any>=[]; 
      
  constructor(private mensajes: Mensajes, private _serviceTipoMatricula:TipoMatriculaService) { }

  ngOnInit() {
    this.GetTipoMatricula();
  }

  async ngAfterViewInit() {
    let body = document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = '../../../assets/js/nifty.min.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }

  async GetTipoMatricula() {
    try {
      let respEntidades = await lastValueFrom( this._serviceTipoMatricula.GetTipoMatricula())
      this.vecTipoMatricula=respEntidades.entidad;
      console.log(this.vecTipoMatricula)
    } catch (e: HttpErrorResponse | any) {
      console.log(e);
    }
  } 


}
