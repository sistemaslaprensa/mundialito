import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Mensajes } from 'src/app/infraestructura/mensajes';
import { EntidadInfoConfiguracionCarrera } from 'src/app/servicio/configuracion/EntidadInfoConfiguracionCarrera';
import { ConfiguracionService } from 'src/app/servicio/configuracion/configuracion.service';
import { LoginService } from 'src/app/servicio/login/login.service';
import { EntidadOpcionTitulacion } from 'src/app/servicio/opcion-titulacion/EntidadOpcionTitulacion';
import { EntidadOpcionesTitulacionByCarrera } from 'src/app/servicio/opcion-titulacion/EntidadOpcionesTitulacionByCarrera';
import { OpciontitulacionService } from 'src/app/servicio/opcion-titulacion/opciontitulacion.service';
import { EntidadPeriodo } from 'src/app/servicio/periodo/EntidadPeriodo';
import { PeriodoService } from 'src/app/servicio/periodo/periodo.service';
import { EntidadConfiguracionTitulacion } from 'src/app/servicio/responsabletitulacion/EntidadConfiguracionTitulacion';
import { ResponsabletitulacionServiceService } from 'src/app/servicio/responsabletitulacion/responsabletitulacion.service.service';

@Component({
  selector: 'app-configuracion-opciones-titulacion',
  templateUrl: './configuracion-opciones-titulacion.component.html',
  styleUrls: ['./configuracion-opciones-titulacion.component.scss']
})
export class ConfiguracionOpcionesTitulacionComponent {
  txt_nivel1: string="Inicio"
  txt_nivel2: string="Configuración"
  txt_nivel3: string="Opciones de titulación"
  txt_titulo: string = "Opciones de Titulación"
  txt_subtitulo: string = "Responsable de titulación por carrera"

  public componentesOpciontitulacion: EntidadOpcionTitulacion = new EntidadOpcionTitulacion //llamo a la entidad
  public componentesConfiguracionTitulacion: EntidadConfiguracionTitulacion = new EntidadConfiguracionTitulacion //llamo a la entidad
  
  public loading: boolean = false;
  public vecEntidadOpcionTitulacion:Array<any>=[];  

  //para traer las opciones de titulacion de la base de datos
  public vOpcionesTitulacion: EntidadOpcionTitulacion[] = []
  public vOpcionesTitulacionPorCarrera: EntidadOpcionesTitulacionByCarrera[] = []
    
  // public entidadConfiguracionTitulacion = new EntidadConfiguracionTitulacion
  configuracionCarrera = new EntidadInfoConfiguracionCarrera
  public entidadPeriodo:EntidadPeriodo = new EntidadPeriodo;
  opcionTitulacionSeleccionada: any;

  constructor(private mensajes: Mensajes, 
    private _serviceOpcionTitulacion:OpciontitulacionService,
    private _configuracionService: ConfiguracionService,
    private _servicioLogin: LoginService,
    private _periodoService: PeriodoService,
    private _responsableTitulacionService: ResponsabletitulacionServiceService,
  ) { }

  ngOnInit() {
    const identity = JSON.parse(this._servicioLogin.GetIdentity());
    console.log(identity)

    this.GetConfiguracionCarreraByCarrera(identity.idRolUsuario[0].idCarrera);
    this.GetOpcionTitulacionPorCarrera(identity.idRolUsuario[0].idCarrera);
    this.GetPeriodoVigente();
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

  async GetPeriodoVigente() {
    try {
      this.loading = true; 
      let respEntidad = await lastValueFrom(this._periodoService.GetPeriodoVigente())
      this.entidadPeriodo = respEntidad.entidad;
      console.log(this.entidadPeriodo)
    } catch (e: HttpErrorResponse | any) {
      console.log(e);
    } finally {
      this.loading = false; // Ocultar el indicador de carga después de completar la operación
    }
  }

  async GetConfiguracionCarreraByCarrera(id_Carrera: number) {
  
    try {
      let response = await lastValueFrom(this._configuracionService.GetConfiguracionCarreraByCarrera(id_Carrera))
      this.configuracionCarrera = response.entidad
    } catch (e: HttpErrorResponse | any) {
      console.log(e);
    }
  }

  async ObtenerOpciones() {

    try {
      let response = await lastValueFrom(this._serviceOpcionTitulacion.GetOpcionTitulacion())
      this.vOpcionesTitulacion = response.entidad

    } catch (e: HttpErrorResponse | any) {
      console.log(e);
    }
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

  //Seleccionar 
  async seleccionarOpcionTitulacion(event: any) {
    // Realiza acciones al seleccionar una opción de titulación
    const value = event?.target?.value;
    this.opcionTitulacionSeleccionada = value;
    if (value) {
      // Imprimir el idFacultad seleccionado en la consola
      console.log('idNivel seleccion Opcion seleccionado:', value);
    }
    // console.log(event);
  }

  async GuardarOpcionTitulacionCarrera() {
    //debugger
    try {
      this.loading = true;
      console.log(this.componentesConfiguracionTitulacion);
      let response = await lastValueFrom(this._responsableTitulacionService.GuardarOpcionTitulacionCarrera(this.componentesConfiguracionTitulacion))
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

  async GetOpcionTitulacionPorCarrera(id_Carrera: number) {
    try {
      let response = await lastValueFrom( this._serviceOpcionTitulacion.GetOpcionTitulacionPorCarrera(id_Carrera))
      this.vOpcionesTitulacionPorCarrera=response.entidad;
      console.log(this.vecEntidadOpcionTitulacion)
    } catch (e: HttpErrorResponse | any) {
      console.log(e);
    }
  } 

}