import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { Mensajes } from 'src/app/infraestructura/mensajes';
import { EntidadPeriodo } from 'src/app/servicio/periodo/EntidadPeriodo';
import { PeriodoService } from 'src/app/servicio/periodo/periodo.service';


@Component({
  selector: 'app-periodo-matricula',
  templateUrl: './periodo-matricula.component.html',
  styleUrls: ['./periodo-matricula.component.scss'],  
})

export class PeriodoMatriculaComponent {
  txt_nivel1: string="Inicio"
  txt_nivel2: string="Configuración"
  txt_nivel3: string="Periodo de matrículas"
  txt_titulo: string = "Periodo de matrículas"
  txt_subtitulo: string = "Administrador"

  
  fechaInicio: string = ""
  horaInicio: string = ""
  fechaFin: string = ""
  horaFin: string = ""
  fechaInicioSeleccionada: string = ""
  horaInicioSeleccionada: string = ""
  fechaFinSeleccionada: string = ""
  horaFinSeleccionada: string = ""
  
  public vPeriodosVigentestitulacion: EntidadPeriodo[] = []

  periodoSeleccionado: any;

  ngOnInit() {  
    this.GetPeriodosVigentesTitulacion();
  }

  constructor(
    private mensajes: Mensajes, 
    private _periodoService: PeriodoService,
    private _formBuilder: FormBuilder) { }    

    async GetPeriodosVigentesTitulacion() {  
      try {
        let response = await lastValueFrom(this._periodoService.GetPeriodosVigentesTitulacion())
        this.vPeriodosVigentestitulacion = response.entidad;
        console.log("periodos: "+ this.vPeriodosVigentestitulacion);
      } catch (e: HttpErrorResponse | any) {
        console.log(e);
      }
    }

    async seleccionarPeriodo(event: any) {
      const value = event?.target?.value;
      this.periodoSeleccionado = value;
      console.log("seleccionarPeriodo: "+ this.periodoSeleccionado)
    }

    

}
