import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Mensajes } from 'src/app/infraestructura/mensajes';
import { EntidadOpcionTitulacion } from 'src/app/servicio/opcion-titulacion/EntidadOpcionTitulacion';
import { OpciontitulacionService } from 'src/app/servicio/opcion-titulacion/opciontitulacion.service';

@Component({
  selector: 'app-opciones-titulacion',
  templateUrl: './opciones-titulacion.component.html',
  styleUrls: ['./opciones-titulacion.component.scss']
})
export class OpcionesTitulacionComponent {
  txt_nivel1: string="Inicio"
  txt_nivel2: string="Configuración"
  txt_nivel3: string="Opciones de titulación"
  txt_titulo: string = "Opciones de titulación"
  txt_subtitulo: string = "Administrador"

  public componentesOpciontitulacion: EntidadOpcionTitulacion = new EntidadOpcionTitulacion //llamo a la entidad
  
  public loading: boolean = false;
  public vecEntidadOpcionTitulacion:Array<any>=[];  
    
  constructor(private mensajes: Mensajes,
    private _serviceOpcionTitulacion:OpciontitulacionService) { }

  ngOnInit() {
    this.GetOpcionTitulacion();
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

  async GetOpcionTitulacion() {
    try {
      let respEntidades = await lastValueFrom( this._serviceOpcionTitulacion.GetOpcionTitulacion())
      this.vecEntidadOpcionTitulacion=respEntidades.entidad;
      console.log(this.vecEntidadOpcionTitulacion)
    } catch (e: HttpErrorResponse | any) {
      console.log(e);
    }
  } 

  seleccionarOpcionTitulacion(id: number) {
    // Realiza acciones al seleccionar una opción de titulación
    console.log(id);
  }

  async GuardarOpcionTitulacion() {
    //debugger
    try {
      this.loading = true;
      let response = await lastValueFrom(this._serviceOpcionTitulacion.GuardarOpcionTitulacion(this.componentesOpciontitulacion))
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
