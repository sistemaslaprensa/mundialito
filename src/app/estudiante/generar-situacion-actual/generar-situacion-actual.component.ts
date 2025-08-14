import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { OpciontitulacionService } from '../../servicio/opcion-titulacion/opciontitulacion.service';
import { EntidadRespuesta } from '../../servicio/comun/EntidadRespuesta';
import { Mensajes } from '../../infraestructura/mensajes';
import { EntidadOpcionTitulacion } from '../../servicio/opcion-titulacion/EntidadOpcionTitulacion';
import { FormBuilder, Validators } from '@angular/forms';
import { InformacionAcademicaService } from 'src/app/servicio/informacionAcademica/informacion-academica.service';
import { LoginService } from 'src/app/servicio/login/login.service';
import { EntidadInformacionAcademica } from 'src/app/servicio/informacionAcademica/EntidadInformacionAcademica';
import { MatriculaService } from 'src/app/servicio/matricula/matricula.service';
import { EntidadSituacionActualTitulacion } from 'src/app/servicio/matricula/EntidadSituacionActualTitulacion';
import { EntidadInformacionMatricula } from 'src/app/servicio/matricula/EntidadInformacionMatricula';
import { EntidadNuevaMatriculaInfo } from 'src/app/servicio/matricula/EntidadNuevaMatriculaInfo';
import { EntidadMatriculaTitulacion } from 'src/app/servicio/matricula/EntidadMatriculaTitulacion';
import { EntidadInfoOrdenPago } from 'src/app/servicio/matricula/EntidadInfoOrdenPago';

@Component({
  selector: 'app-generar-situacion-actual',
  templateUrl: './generar-situacion-actual.component.html',
  styleUrls: ['./generar-situacion-actual.component.scss']
})
export class GenerarSituacionActualComponent {

  primerFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  segundoFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  tercerFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  isLinear = false;
 
  txt_nivel1: string="Inicio"
  txt_nivel2: string="Matriculación"
  txt_nivel3: string="Matrícula titulación"
  txt_titulo: string = "Matricula titulación"
  txt_subtitulo: string = "Matrícula en la unidad de titulación"
   
  verificarSituacionCompleta: boolean = false;

  poseeMatricula : boolean = false;
  
  public situacionActualTitulacion: EntidadSituacionActualTitulacion | null = null;
  public situacionActualCarrera: EntidadInformacionAcademica | null = null;
  public nuevaMatriculaInfo: EntidadNuevaMatriculaInfo | null = null;

  public nuevaMatriculaGenerada: EntidadMatriculaTitulacion | null = null;
  
  public ordenPagoInfo: EntidadInfoOrdenPago | null = null;

  // public nuevaMatricula: | null = null;
    
  public componentesGenerarMatricula: EntidadMatriculaTitulacion = new EntidadMatriculaTitulacion //llamo a la entidad
  public loading: boolean = false;

  constructor(
    private _mensaje: Mensajes,
    private _opcionTitulacionService:OpciontitulacionService, 
    private _informacionAcademicaService:InformacionAcademicaService,     
    private _matriculaService:MatriculaService,     
    private _servicioLogin: LoginService,
    private _formBuilder: FormBuilder) { }

  ngOnInit() {
    let identity = JSON.parse(this._servicioLogin.GetIdentity())
    this.verificarMatriculaTitulacionEstudiante(identity.idUsuario);
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
  
  async verificarMatriculaTitulacionEstudiante(idEstudiante: number) {
    let response = await lastValueFrom(this._matriculaService.BoolMatriculaTitulacionEstudiante(idEstudiante));
    this.poseeMatricula = response.entidad;
    console.log("Tiene matricula en titulacion? = " + this.poseeMatricula)  
  }

  async GetNuevaMatriculaInfo() {
    try {
      let identity = JSON.parse(this._servicioLogin.GetIdentity())
      let response = await lastValueFrom( this._matriculaService.GetNuevaMatriculaInfo(identity.idUsuario))
      this.nuevaMatriculaInfo = response.entidad;
     console.log(this.nuevaMatriculaInfo)
     this.verificarSituacionCompleta = true;
    } catch (e: HttpErrorResponse | any) {
      console.log(e);
    }
  } 

  async GetSituacionEstudianteCarrera() {
    try {
      let identity = JSON.parse(this._servicioLogin.GetIdentity())
      let response = await lastValueFrom( this._informacionAcademicaService.GetSituacionAcademicaEstudiante(identity.idUsuario))
      this.situacionActualCarrera = response.entidad;
     console.log(this.situacionActualCarrera)
     this.verificarSituacionCompleta = true;
    } catch (e: HttpErrorResponse | any) {
      console.log(e);
    }
  } 

  async GetSituacionActualTitulacionEstudiante() {
    try {
      let identity = JSON.parse(this._servicioLogin.GetIdentity())
      let response = await lastValueFrom( this._matriculaService.GetSituacionActualTitulacionEstudiante(identity.idUsuario))
      this.situacionActualTitulacion = response.entidad;
     console.log(this.situacionActualTitulacion)
     this.verificarSituacionCompleta = true;
    } catch (e: HttpErrorResponse | any) {
      console.log(e);
    }
  }

  async GetOrdenPagoInfo(idMatricula: number) {
    try {
      let identity = JSON.parse(this._servicioLogin.GetIdentity())
      let response = await lastValueFrom( this._matriculaService.GetOrdenPagoInfo(idMatricula))
      this.ordenPagoInfo = response.entidad;
     console.log(this.ordenPagoInfo)
    } catch (e: HttpErrorResponse | any) {
      console.log(e);
    }
  }

  async GenerarMatricula() {
    this._mensaje.MensajeConfirmacionConfirmar('¿Estás seguro de que deseas aceptar esta matricula?').then(async (result) => {
        if (result.isConfirmed) {

            if (this.nuevaMatriculaInfo) {
                this.componentesGenerarMatricula.idEstudiante = this.nuevaMatriculaInfo.idEstudiante;
                this.componentesGenerarMatricula.idFacultad = this.nuevaMatriculaInfo.idFacultad;
                this.componentesGenerarMatricula.idCarrera = this.nuevaMatriculaInfo.idCarrera;
                this.componentesGenerarMatricula.idPeriodo = this.nuevaMatriculaInfo.idPeriodo;
                this.componentesGenerarMatricula.idOpcionTitulacion = this.nuevaMatriculaInfo.idOpcionTitulacion;
                this.componentesGenerarMatricula.idTipoMatricula = this.nuevaMatriculaInfo.idTipoMatricula;
            }
            console.log("Datos de la matricula:" + JSON.stringify(this.componentesGenerarMatricula))

            try {
                this.loading = true;
                let response = await lastValueFrom(this._matriculaService.GuardarMatricula(this.componentesGenerarMatricula));
                this.nuevaMatriculaGenerada = response.entidad;
                
                console.log("Nueva matricula generada!: " + JSON.stringify(this.nuevaMatriculaGenerada))
                this.loading = false;
                this._mensaje.MensajeCorrecto(response.mensaje);                

                if(this.nuevaMatriculaGenerada?.idOrden!=null){
                  this.GetOrdenPagoInfo(this.nuevaMatriculaGenerada?.idMatriculaTitulacion);
                }
                
                // Recargar la página después de un breve retraso (por ejemplo, 1 segundo)
                //setTimeout(() => {
                  //  window.location.reload();
                //}, 1000);

            } catch (e: HttpErrorResponse | any) {
                this.loading = false;
                console.log(e);
                this._mensaje.MensajeError(e.message); //, e.error, e.status);
            }

        }
    });
}
}
