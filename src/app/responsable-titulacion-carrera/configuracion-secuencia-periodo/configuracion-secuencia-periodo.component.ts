import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Mensajes } from 'src/app/infraestructura/mensajes';
import { LoginService } from 'src/app/servicio/login/login.service';
import { EntidadPeriodo } from 'src/app/servicio/periodo/EntidadPeriodo';
import { PeriodoService } from 'src/app/servicio/periodo/periodo.service';
import { EntidadInfoSecuenciaPeriodo } from 'src/app/servicio/responsabletitulacion/EntidadInfoSecuenciaPeriodo';
import { ResponsabletitulacionServiceService } from 'src/app/servicio/responsabletitulacion/responsabletitulacion.service.service';

@Component({
  selector: 'app-configuracion-secuencia-periodo',
  templateUrl: './configuracion-secuencia-periodo.component.html',
  styleUrls: ['./configuracion-secuencia-periodo.component.scss']
})
export class ConfiguracionSecuenciaPeriodoComponent {
  txt_nivel1: string="Inicio"
  txt_nivel2: string="Configuración"
  txt_nivel3: string="Secuencia de Periodos"
  txt_titulo: string = "Secuencia de Periodos"
  txt_subtitulo: string = "Responsable de titulación por carrera"

  secuenciaPeriodoCarrera = new EntidadInfoSecuenciaPeriodo
  public vsecuenciaPeriodoCarrera: EntidadInfoSecuenciaPeriodo[] = []
  public vperiodos: EntidadPeriodo[] = []

  constructor(private mensajes: Mensajes, 
    private _servicioLogin: LoginService,
    private _periodoService: PeriodoService,
    private _responsableTitulacionService: ResponsabletitulacionServiceService,
  ) { }

  ngOnInit() {
    const identity = JSON.parse(this._servicioLogin.GetIdentity());
    console.log(identity);    
    this.GetPeriodosFacultadTitulacion();
    this.GetConfiguracionCarreraByCarrera(identity.idRolUsuario[0].idCarrera);
  }


  async GetConfiguracionCarreraByCarrera(id_Carrera: number) {
  
    try {
      let response = await lastValueFrom(this._responsableTitulacionService.ObtenerSecuenciaPeriodoByCarrera(id_Carrera))
      this.vsecuenciaPeriodoCarrera = response.entidad
    } catch (e: HttpErrorResponse | any) {
      console.log(e);
    }
  }

  async GetPeriodosFacultadTitulacion() {
  
    try {
      let response = await lastValueFrom(this._periodoService.GetPeriodosFacultadTitulacion())
      this.vperiodos = response.entidad
    } catch (e: HttpErrorResponse | any) {
      console.log(e);
    }
  }


}
