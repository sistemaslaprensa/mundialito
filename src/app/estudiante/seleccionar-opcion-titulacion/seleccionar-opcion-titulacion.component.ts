import { HttpErrorResponse } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { identity, lastValueFrom } from 'rxjs';
import { Mensajes } from 'src/app/infraestructura/mensajes';
import { EntidadInformacionAcademica } from 'src/app/servicio/informacionAcademica/EntidadInformacionAcademica';
import { InformacionAcademicaService } from 'src/app/servicio/informacionAcademica/informacion-academica.service';
import { LoginService } from 'src/app/servicio/login/login.service';
import { MatriculaService } from 'src/app/servicio/matricula/matricula.service';
import { EntidadOpcionTitulacion } from 'src/app/servicio/opcion-titulacion/EntidadOpcionTitulacion';
import { EntidadOpcionesTitulacionByCarrera } from 'src/app/servicio/opcion-titulacion/EntidadOpcionesTitulacionByCarrera';
import { EntidadRegistroSeleccion } from 'src/app/servicio/opcion-titulacion/EntidadRegistroSeleccion';
import { OpciontitulacionService } from 'src/app/servicio/opcion-titulacion/opciontitulacion.service';

@Component({
  selector: 'app-seleccionar-opcion-titulacion',
  templateUrl: './seleccionar-opcion-titulacion.component.html',
  styleUrls: ['./seleccionar-opcion-titulacion.component.scss']
})
export class SeleccionarOpcionTitulacionComponent {
  txt_nivel1: string="Inicio"
  txt_nivel2: string="Inscripciones"
  txt_nivel3: string="Opción de titulación"
  txt_titulo: string = "Opción de titulación"
  txt_subtitulo: string = "Estudiante"

  @ViewChild('stepper') stepper!: MatStepper;
  
  firstFormGroup = this._formBuilder.group({firstCtrl: ['', Validators.required],});
  secondFormGroup = this._formBuilder.group({secondCtrl: ['', Validators.required],});
  tresFormGroup = this._formBuilder.group({tresCtrl: ['', Validators.required],});

  paso1 = this._formBuilder.group({paso1Ctrl: ['', Validators.required],});
  paso2 = this._formBuilder.group({paso2Ctrl: ['', Validators.required],});
  paso3 = this._formBuilder.group({paso3Ctrl: ['', Validators.required],});
  paso4 = this._formBuilder.group({paso4Ctrl: ['', Validators.required],});

  public componentesOpciontitulacion: EntidadOpcionTitulacion = new EntidadOpcionTitulacion //llamo a la entidad
  public componentesSeleccion: EntidadRegistroSeleccion = new EntidadRegistroSeleccion //llamo a la entidad
  public seleccionEstudiante: EntidadOpcionesTitulacionByCarrera | null = null;
  
  public loading: boolean = false;
  aceptarAcuerdos: boolean = false;
  seleccionOpcion: boolean = false;
  cumpleNivelSeleccion : boolean = false;
  cumpleNivelInicio : boolean = false;
  poseeMatricula : boolean = false;
  poseeOpcion : boolean = false;
  public tieneOpcion : any;
  cumpleTodosLosRequisitos: boolean = false; // Nueva variable para indicar si se cumplen todos los requisitos


  public vecEntidad:Array<any>=[];  

  //para traer las opciones de titulacion de la base de datos
  public vOpcionesTitulacion: EntidadOpcionTitulacion[] = []
  public vOpcionesTitulacionCarrera: EntidadOpcionesTitulacionByCarrera[] = []

  // public situacionEstudiante: EntidadInformacionAcademica = {};
  public situacionEstudiante: EntidadInformacionAcademica | null = null;
    
  constructor(
    private mensajes: Mensajes, 
    private _opcionTitulacionService:OpciontitulacionService, 
    private _informacionAcademicaService:InformacionAcademicaService,     
    private _matriculaService:MatriculaService,     
    private _servicioLogin: LoginService,
    private _formBuilder: FormBuilder) { }

  ngOnInit() {    
    this.existeSeleccion();
  }
  
  async existeSeleccion() {
    let identity = JSON.parse(this._servicioLogin.GetIdentity())
    let response = await lastValueFrom(this._matriculaService.BoolSeleccionOpcionEstudiante(identity.idUsuario));
    this.poseeOpcion = response.entidad;

    // Cambiar al paso 4 si tiene una selección previa
    console.log("NUEVO METODO: Tiene opcion de titulacion? = " + this.poseeOpcion)

    if(this.poseeOpcion) {
      this.stepper.selectedIndex = 3; // El índice del paso 4 es 3 (los índices empiezan desde 0)
    }
    
    this.GetOpcionTitulacionEstudiante();
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

  handleChange() {
    this.aceptarAcuerdos = !this.aceptarAcuerdos;
    let identity = JSON.parse(this._servicioLogin.GetIdentity())
    this.GetOpcionesTitulacionPorCarrera(identity.idRolUsuario[0].idCarrera);
    this.verificarNivelSeleccionOpcionEstudiante(identity.idUsuario);
    this.verificarMatriculaTitulacionEstudiante(identity.idUsuario);
    this.verificarSeleccionOpcionTitulacionEstudiante(identity.idUsuario);    
    console.log("ESTOY TRABAJANDO CON ESTE ID:" + identity.idUsuario)
    this.verificarRequisitos();
  }

  
  async verificarNivelSeleccionOpcionEstudiante(idEstudiante: number) {
    //debugger
    let response = await lastValueFrom(this._matriculaService.BoolNivelSeleccionOpcionEstudiante(idEstudiante));
    this.cumpleNivelSeleccion = response.entidad;
    console.log("Está en el nivel de seleccion? = " + this.cumpleNivelSeleccion)
  this.verificarRequisitos();
  }

  async verificarMatriculaTitulacionEstudiante(idEstudiante: number) {
    //debugger
    let response = await lastValueFrom(this._matriculaService.BoolMatriculaTitulacionEstudiante(idEstudiante));
    this.poseeMatricula = response.entidad;
    console.log("Tiene matricula en titulacion? = " + this.poseeMatricula)
  this.verificarRequisitos();
  }

  async verificarSeleccionOpcionTitulacionEstudiante(idEstudiante: number) {
    //debugger
    let response = await lastValueFrom(this._matriculaService.BoolSeleccionOpcionEstudiante(idEstudiante));
    this.poseeOpcion = response.entidad;
    console.log("Tiene opcion de titulacion? = " + this.poseeOpcion)
  this.verificarRequisitos();
  }

  async GetOpcionesTitulacionPorCarrera(idCarrera: number) {    
    console.log("Id de la carrera: " + idCarrera);
    try {      
      let respEntidades = await lastValueFrom( this._opcionTitulacionService.ObtenerOpcionesTitulacionPorCarrera(idCarrera))
      this.vOpcionesTitulacionCarrera=respEntidades.entidad;
      console.log(this.vOpcionesTitulacionCarrera)
    } catch (e: HttpErrorResponse | any) {
      console.log(e);
    }
  } 

  verificarRequisitos() {
    // Aquí podrías agregar más condiciones si hay más requisitos
    this.cumpleTodosLosRequisitos = this.aceptarAcuerdos 
    && this.cumpleNivelSeleccion  
    && !this.poseeMatricula 
    && !this.poseeOpcion ;
    console.log("cumple los requisitos: "+this.cumpleTodosLosRequisitos)
  }  
    
  async GetOpcionTitulacionEstudiante() {    
    try {      
      let identity = JSON.parse(this._servicioLogin.GetIdentity())
      let response = await lastValueFrom( this._opcionTitulacionService.ObtenerSeleccionOpcionEstudiante(identity.idUsuario))
      this.seleccionEstudiante=response.entidad;
      console.log("OPCION SELECCIONADA Y TRAIDA DESDE LA BASE DE DATOS: " + this.seleccionEstudiante )
    } catch (e: HttpErrorResponse | any) {
      console.log(e);
    }
  } 

  handleRadioChange(event: any) {
    this.seleccionOpcion = true;
    const selectedOption = event.value;
    console.log("configuracion de Opción seleccionada:", selectedOption);
    this.componentesSeleccion.idConfiguracionTitulacion = selectedOption;
    this.seleccionOpcion = true;
  }

  async GuardarOpcionTitulacionEstudiante() {
    //debugger
    try {
      this.loading = true;
      let identity = JSON.parse(this._servicioLogin.GetIdentity())
      this.componentesSeleccion.idEstudiante = identity.idUsuario;
      console.log(this.componentesSeleccion)
      let response = await lastValueFrom(this._opcionTitulacionService.GuardarOpcionTitulacionEstudiante(this.componentesSeleccion))
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
