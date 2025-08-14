import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Mensajes } from 'src/app/infraestructura/mensajes';
import { EntidadTipoMatricula } from 'src/app/servicio/tipoMatricula/EntidadTipoMatricula';
import { TipoMatriculaService } from 'src/app/servicio/tipoMatricula/tipo-matricula.service';

@Component({
  selector: 'app-tipo-matricula',
  templateUrl: './tipo-matricula.component.html',
  styleUrls: ['./tipo-matricula.component.scss']
})
export class TipoMatriculaComponent {
  txt_nivel1: string="Inicio"
  txt_nivel2: string="Configuración"
  txt_nivel3: string="Tipos de Matrícula"
  txt_titulo: string = "Tipos de Matrícula"
  txt_subtitulo: string = "Administrador"

  public componentesTipoMatricula: EntidadTipoMatricula = new EntidadTipoMatricula //llamo a la entidad
  
  public loading: boolean = false;
  public vecEntidadTipoMatricula:Array<any>=[]; 
      
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
      this.vecEntidadTipoMatricula=respEntidades.entidad;
      console.log(this.vecEntidadTipoMatricula)
    } catch (e: HttpErrorResponse | any) {
      console.log(e);
    }
  } 

  seleccionarTipoMatricula(id: number) {
    // Realiza acciones al seleccionar una opción de titulación
    console.log(id);
  }

  async GuardarTipoMatricula() {
    debugger
    try {
      this.loading = true;

      let response = await lastValueFrom(this._serviceTipoMatricula.GuardarTipoMatricula(this.componentesTipoMatricula))
      this.loading = false;
      this.mensajes.MensajeCorrecto(response.mensaje);

       // Recargar la página después de un breve retraso (por ejemplo, 1 segundo)
       setTimeout(() => {
        window.location.reload();
    }, 1000);

    } catch (e: HttpErrorResponse | any) {
      this.loading = false;
      console.log(e);
      this.mensajes.MensajeError(e.message);//, e.error, e.status);
    }
  }
}