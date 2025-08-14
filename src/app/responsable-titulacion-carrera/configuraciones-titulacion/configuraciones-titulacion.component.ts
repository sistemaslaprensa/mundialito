import { HttpErrorResponse } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { OpciontitulacionService } from '../../servicio/opcion-titulacion/opciontitulacion.service';
import { InformacionAcademicaService } from '../../servicio/informacionAcademica/informacion-academica.service';
import { EntidadFacultadEstudiante } from '../../servicio/informacionAcademica/EntidadFacultadEstudiante';
import { EntidadCarreraEstudiantes } from '../../servicio/informacionAcademica/EntidadCarreraEstudiantes';
import { EntidadRespuesta } from '../../servicio/comun/EntidadRespuesta';
import { Mensajes } from '../../infraestructura/mensajes';
import { EntidadNivelesCarreraBySistemaEstudios } from 'src/app/servicio/informacionAcademica/EntidadNivelesCarreraBySistemaEstudios';
import { EntidadSistemaEstudios } from 'src/app/servicio/informacionAcademica/EntidadSistemaEstudios';
import { EntidadConfiguracionCarrera } from 'src/app/servicio/configuracion/EntidadConfiguracionCarrera';
import { ConfiguracionService } from 'src/app/servicio/configuracion/configuracion.service';
import { LoginService } from 'src/app/servicio/login/login.service';
import { ResponsabletitulacionServiceService } from 'src/app/servicio/responsabletitulacion/responsabletitulacion.service.service';
import { EntidadCarreraFacultad } from 'src/app/servicio/responsabletitulacion/EntidadCarreraFacultad';
import { EntidadInfoConfiguracionCarrera } from 'src/app/servicio/configuracion/EntidadInfoConfiguracionCarrera';
import { EntidadConfiguracionTitulacion } from 'src/app/servicio/responsabletitulacion/EntidadConfiguracionTitulacion';

@Component({
  selector: 'app-configuraciones-titulacion',
  templateUrl: './configuraciones-titulacion.component.html',
  styleUrls: ['./configuraciones-titulacion.component.scss']
})
export class ConfiguracionesTitulacionComponent {
  txt_nivel1: string = "Inicio"
  txt_nivel2: string = "Configuración"
  txt_nivel3: string = "Configuración Carrera"
  txt_titulo: string = "Configuración Carrera"
  txt_subtitulo: string = "Responsable de titulación por carrera"

  public vecSistemasEstudios: EntidadSistemaEstudios[] = [];
  public vecNiveles: EntidadNivelesCarreraBySistemaEstudios[] = [];
  public vecNivelSeleccionOpcion: EntidadNivelesCarreraBySistemaEstudios[] = [];
  public vecNivelInicioTitulacion: EntidadNivelesCarreraBySistemaEstudios[] = [];


  public configuracionCarrera = new EntidadInfoConfiguracionCarrera
  
  public configuracionTitulacion = new EntidadConfiguracionTitulacion

  public entidadConfiguracionCarrera = new EntidadConfiguracionCarrera
  public datosCarreraFacultad: EntidadCarreraFacultad | null = null;

  idFacultadResponsable: number = 0;
  idCarreraResponsable: number = 0;
  FacultadResponsable: string = "";
  CarreraResponsable: string = "";

  sistemaSeleccionada: any;
  nivelSeleccionSeleccionada: any;
  nivelInicioSeleccionada: any;

  public loading: boolean = false;

  constructor(
    private _mensaje: Mensajes,
    private opcionTitulacion: OpciontitulacionService,
    private _informacionAcademicaService: InformacionAcademicaService,
    private _responsableTitulacionService: ResponsabletitulacionServiceService,
    private _configuracionService: ConfiguracionService,
    private _servicioLogin: LoginService,
  ) { }

  ngOnInit() {
    const identity = JSON.parse(this._servicioLogin.GetIdentity());
    console.log(identity)

    this.GetConfiguracionCarreraByCarrera(identity.idRolUsuario[0].idCarrera);
    
    this.idFacultadResponsable = identity.idRolUsuario[0].idFacultad;
    this.idCarreraResponsable = identity.idRolUsuario[0].idCarrera;
    this.FacultadResponsable = identity.idRolUsuario[0].facultad;
    this.CarreraResponsable = identity.idRolUsuario[0].carrera;
    
    this.GetSistemaEstudiosCarrera(this.idCarreraResponsable);
    this.GetNivelesCarrera(this.idCarreraResponsable,2);
  }

  async GetSistemaEstudiosCarrera(id_Carrera: number) {
    try {
      let responseEntidadF = await lastValueFrom(this._informacionAcademicaService.GetSistemaEstudiosByIdCarreraApi(id_Carrera))
      this.vecSistemasEstudios = responseEntidadF.entidad
      console.log(this.vecSistemasEstudios)
    } catch (e: HttpErrorResponse | any) {
      console.log(e);
    }
  }

  async seleccionarSistemaEstudiosCarrera(event: any) {
    const valueSistemaEstudio = event?.target?.value;
    let idCarrera = this.idCarreraResponsable;
    this.sistemaSeleccionada = valueSistemaEstudio;
    if (valueSistemaEstudio) {
      console.log('idSistema de estudio de carrera seleccionado:', valueSistemaEstudio);
      this.GetNivelesCarrera(idCarrera, valueSistemaEstudio);
    }
  }

  async GetNivelesCarrera(id_Carrera: number, id_SistemaEstudios: number) {
    try {
      let response = await lastValueFrom(this._informacionAcademicaService.GetNivelesByIdCarreraApi(id_Carrera, id_SistemaEstudios))
      this.vecNiveles = response.entidad
    } catch (e: HttpErrorResponse | any) {
      console.log(e);
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



  //Seleccionar 
  async seleccionarNivelSeleccionOpcion(event: any) {
    // Realiza acciones al seleccionar una opción de titulación
    const value = event?.target?.value;
    this.nivelSeleccionSeleccionada = value;
    if (value) {
      // Imprimir el idFacultad seleccionado en la consola
      console.log('idNivel seleccion Opcion seleccionado:', value);
    }
    // console.log(event);
  }

  

  //Seleccionar una 
  async seleccionarNivelInicioTitulacion(event: any) {
    // Realiza acciones al seleccionar una opción de titulación
    const value = event?.target?.value;
    if (value) {
      // Imprimir el idNivel seleccionado en la consola
      console.log('idNivel de inicio de titulacion seleccionado:', value);
    }
  }

  async GuardarConfiguracionCarrera() {
    try {
      this.loading = true;
      this.entidadConfiguracionCarrera.idCarrera = this.idCarreraResponsable,
      this.entidadConfiguracionCarrera.idFacultad = this.idFacultadResponsable,
      this.entidadConfiguracionCarrera.idSistemaEstudios = 2
      console.log("MANDO a guardar: " + JSON.stringify(this.entidadConfiguracionCarrera))
      let response = await lastValueFrom(this._configuracionService.GuardarConfiguracionCarrera(this.entidadConfiguracionCarrera))
      this.loading = false;
      this._mensaje.MensajeCorrecto(response.mensaje);

    } catch (e: HttpErrorResponse | any) {
      this.loading = false;
      console.log(e);
      this._mensaje.MensajeError(e.message);//, e.error, e.status);
    }
  }
}




// /*obtener desde API */
  // async NivelInicioTitulacion(id_Carrera: number, id_SistemaEstudios: number) {
  //   try {
  //     let responseEntidadF = await lastValueFrom(this._informacionAcademicaService.GetNivelesByIdCarreraApi(id_Carrera, id_SistemaEstudios))
  //     this.vecNivelInicioTitulacion = responseEntidadF.entidad
  //     console.log(this.vecNivelInicioTitulacion)
  //   } catch (e: HttpErrorResponse | any) {
  //     console.log(e);
  //   }
  // }

    // async NivelSeleccionOpcion(id_Carrera: number, id_SistemaEstudios: number) {
  //   try {
  //     let responseEntidadF = await lastValueFrom(this._informacionAcademicaService.GetNivelesByIdCarreraApi(id_Carrera, id_SistemaEstudios))
  //     this.vecNivelSeleccionOpcion = responseEntidadF.entidad
  //     console.log(this.vecNivelSeleccionOpcion)
  //   } catch (e: HttpErrorResponse | any) {
  //     console.log(e);
  //   }
  // }