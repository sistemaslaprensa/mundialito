import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { Mensajes } from 'src/app/infraestructura/mensajes';
import { EntidadInformacionServidor } from 'src/app/servicio/administrador/EntidadInformacionServidor';
import { EntidadListarResponsables } from 'src/app/servicio/administrador/EntidadListarResponsables';
import { AdministradorService } from 'src/app/servicio/administrador/administrador.service';

import { EntidadPeriodo } from 'src/app/servicio/periodo/EntidadPeriodo';
import { PeriodoService } from 'src/app/servicio/periodo/periodo.service';

@Component({
  selector: 'app-responsables',
  templateUrl: './responsables.component.html',
  styleUrls: ['./responsables.component.scss']
})
export class ResponsablesComponent {
  txt_nivel1: string = "Inicio"
  txt_nivel2: string = "Configuración"
  txt_nivel3: string = "Responsables"
  txt_titulo: string = "Responsables"
  txt_subtitulo: string = "Administrador"

  showPeriodSelect: boolean = false;  
  selectedOption: string = 'option1'; // Por defecto "Ver matrícula vigente"

  public vperiodos: EntidadPeriodo[] = []

  cargosSeleccionados: { [cargoId: number]: any[] } = {};
  cargoSeleccionado: any;

  cargosSeleccionadosBD: { [cargoId: number]: any[] } = {};

  cargoSeleccionadoBD: any;
  periodoSeleccionadoNoVigente: any;

  public componentesListarResposables:EntidadListarResponsables = new EntidadListarResponsables
  
  public componentesInformacionServidor: EntidadInformacionServidor = new EntidadInformacionServidor //llamo a la entidad

  vResponsablesBD:EntidadInformacionServidor[] = [];

  public loading: boolean = false;

  resultados: any[] = []; // Arreglo para almacenar los resultados
  public vecEntidadDecanos: Array<any> = [];
  public entidadPeriodo:EntidadPeriodo = new EntidadPeriodo;
 

  constructor(
    private mensajes: Mensajes,
    private _administradorService: AdministradorService,
    private _periodoService: PeriodoService,
  ) { }

  ngOnInit() {
    this.GetPeriodoVigente();   
    this.GetPeriodosFacultadTitulacion();   
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

  updatePeriodoId() {
    if (this.selectedOption === 'option1') {
      this.componentesListarResposables.IdPeriodo = this.entidadPeriodo.periodoId;      
      console.log("this.componentesListarResposables.IdPeriodo:" + this.componentesListarResposables.IdPeriodo)
    } else {
      this.componentesListarResposables.IdPeriodo = 0; // Resetea el IdPeriodo o realiza alguna acción si es necesario      
      console.log("this.componentesListarResposables.IdPeriodo:" + this.componentesListarResposables.IdPeriodo)  
    }
  }

  onOptionChange(option: string) {
    this.showPeriodSelect = (option === 'option2'); // Muestra el select solo si 'Ver historial' está seleccionado
    this.updatePeriodoId(); // Actualiza el IdPeriodo basado en la opción seleccionada
    this.vResponsablesBD = []; // Reinicia vResponsablesBD
    this.componentesListarResposables.IdTipoRol = 0; //Reinicia el cargo
  }

  async seleccionarCargoBDLocal(event: any) {
    const value = event?.target?.value;
    this.cargoSeleccionadoBD = value;

    // Inicializa el arreglo de servidores seleccionados para el cargo si no existe
    if (!this.cargosSeleccionadosBD[this.cargoSeleccionadoBD]) {
      this.cargosSeleccionadosBD[this.cargoSeleccionadoBD] = [];
    }

    this.componentesListarResposables.IdTipoRol=value;    
    console.log("mando el id de:" + this.componentesListarResposables.IdTipoRol);
    // Verifica la opción seleccionada y llama al método correspondiente
    if (this.selectedOption === "option1") {
      this.GetResponsablesVigentes();
    } else if (this.selectedOption === "option2") {
      this.GetResponsablesNoVigentes();
    }

  }

  async seleccionarPeriodoNoVigente(event: any) {
    const value = event?.target?.value;
    this.periodoSeleccionadoNoVigente = value;

    this.componentesListarResposables.IdPeriodo=value;    
    console.log("mando el id del periodo: " + this.componentesListarResposables.IdPeriodo);

    if (this.selectedOption === "option1") {
      this.GetResponsablesVigentes();
    } else if (this.selectedOption === "option2") {
      this.GetResponsablesNoVigentes();
    }
  }

  async GetResponsablesVigentes() {
    try {
      this.loading = true;
      console.log("MANDO ESTO PARA CONSULTAR VIGENTES:" + JSON.stringify(this.componentesListarResposables));
      let response = await lastValueFrom(this._administradorService.ListaResponsablesVigentes(this.componentesListarResposables))
      this.vResponsablesBD = response.entidad;
      console.log("ESTAMOS CON ESTOS MANES VIGENTES:"+this.vResponsablesBD)
    } catch (e: HttpErrorResponse | any) {
      console.log(e);
    } finally {
      this.loading = false; // Ocultar el indicador de carga después de completar la operación
    }
  }

  async GetResponsablesNoVigentes() {
    try {
      this.loading = true;
      console.log("MANDO ESTO PARA CONSULTAR NO VIGENTES:"+ JSON.stringify(this.componentesListarResposables));
      let response = await lastValueFrom(this._administradorService.ListaResponsablesNoVigentes(this.componentesListarResposables))
      this.vResponsablesBD = response.entidad;
      console.log("ESTAMOS CON ESTOS MANES NO VIGENTES:"+this.vResponsablesBD)
    } catch (e: HttpErrorResponse | any) {
      console.log(e);
    } finally {
      this.loading = false; // Ocultar el indicador de carga después de completar la operación
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

  

  async GetPeriodoVigente() {
    try {
      this.loading = true; 
      let response = await lastValueFrom(this._periodoService.GetPeriodoVigente())
      this.entidadPeriodo = response.entidad;     

      // this.entidadPeriodo.periodoId = 385;
      // this.entidadPeriodo.descripcion = "Titulacion 20xx-xS";
      // this.entidadPeriodo.situacion = "vigenteee";

       
      
      this.updatePeriodoId(); // Actualiza el IdPeriodo basado en la opción seleccionada
      console.log("entidad periodo: " +this.entidadPeriodo.periodoId)
    } catch (e: HttpErrorResponse | any) {
      console.log(e);
    } finally {
      this.loading = false; // Ocultar el indicador de carga después de completar la operación
    }
  }
  
  async GetDecanosApi() {
    try {
      this.loading = true; 
      let respEntidades = await lastValueFrom(this._administradorService.GetDecanosApi())
      this.resultados = respEntidades.entidad;
      console.log(this.resultados)
    } catch (e: HttpErrorResponse | any) {
      console.log(e);
    } finally {
      this.loading = false; // Ocultar el indicador de carga después de completar la operación
    }
  }

  async GetDirectoresApi() {
    try {
      this.loading = true; 
      let respEntidades = await lastValueFrom(this._administradorService.GetDirectoresApi())
      this.resultados = respEntidades.entidad;
      console.log(this.resultados)
    } catch (e: HttpErrorResponse | any) {
      console.log(e);
    } finally {
      this.loading = false; // Ocultar el indicador de carga después de completar la operación
    }
  }

  async GetResponsablesCarreraApi() {
    try {
      this.loading = true; 
      let response = await lastValueFrom(this._administradorService.GetResponbleTiCarreraApi())
      this.resultados = response.entidad;
      console.log(this.resultados)
    } catch (e: HttpErrorResponse | any) {
      console.log(e);
    } finally {
      this.loading = false; // Ocultar el indicador de carga después de completar la operación
    }
  }

 
  
  
  async seleccionarCargo(event: any) {
    const value = event?.target?.value;
    this.cargoSeleccionado = value;

    // Inicializa el arreglo de servidores seleccionados para el cargo si no existe
    if (!this.cargosSeleccionados[this.cargoSeleccionado]) {
      this.cargosSeleccionados[this.cargoSeleccionado] = [];
    }

    switch (value) {
      case '3': // Decano
        this.GetDecanosApi();
        break;
      case '4': // Directores
        this.GetDirectoresApi();
        break;
      // case '3': // SecretariasCarrera
      //   this.GetDecanosApi();
      //   break;
      case '6': // Responsables titulacion carrera
        this.GetResponsablesCarreraApi();
        break;

      default:
        this.resultados = [];
        break;
        // Aquí puedes mostrar el cargo seleccionado en tu tabla o hacer lo que necesites con él
        console.log(value);
    }
  }


async agregarUsuarios() {
  //debugger
  try {
    this.loading = true;
    let response = await lastValueFrom(this._administradorService.AgregarUsuariosResponsables(this.resultados));

    this.loading = false;
    this.mensajes.MensajeCorrecto(response.mensaje);

    // Recargar la página después de un breve retraso (por ejemplo, 1 segundo)
    setTimeout(() => {
      window.location.reload();
    }, 1000);

  } catch (e: HttpErrorResponse | any) {
    this.loading = false;
    console.log(e);
    this.mensajes.MensajeError(e.error);
  }
}

}