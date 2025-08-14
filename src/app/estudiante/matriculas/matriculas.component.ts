import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Mensajes } from 'src/app/infraestructura/mensajes';
import { LoginService } from 'src/app/servicio/login/login.service';
import { EntidadInformacionMatricula } from 'src/app/servicio/matricula/EntidadInformacionMatricula';
import { EntidadSituacionActualTitulacion } from 'src/app/servicio/matricula/EntidadSituacionActualTitulacion';
import { MatriculaService } from 'src/app/servicio/matricula/matricula.service';
import { jsPDF } from 'jspdf';
import { autoTable } from 'jspdf-autotable';
import { DatePipe } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeEsEC from '@angular/common/locales/es-EC';
import { EntidadInfoOrdenPago } from 'src/app/servicio/matricula/EntidadInfoOrdenPago';

@Component({
  selector: 'app-matriculas',
  templateUrl: './matriculas.component.html',
  styleUrls: ['./matriculas.component.scss']
})
export class MatriculasComponent {
  txt_nivel1: string="Inicio"
  txt_nivel2: string="Historial"
  txt_nivel3: string="Trayectoria académica"
  txt_titulo: string = "Trayectoria académica"
  txt_subtitulo: string = "Información académica de matrículas en la unidad de titulación"

  public vecMatriculas: EntidadInformacionMatricula[] = [];

  public eMatricula: EntidadInformacionMatricula | null = null;
  public eOrdenPagoInfo = new EntidadInfoOrdenPago ;
  public matriculaVigenteEstudiante: EntidadSituacionActualTitulacion | null = null;
  
  //para guardar
  // public entidadConfiguracionCarrera = new EntidadConfiguracionCarrera
  // public datosCarreraFacultad: EntidadCarreraFacultad | null = null;

  selectedOption: string = 'option1'; // Por defecto "Ver matrícula vigente"

  idFacultadResponsable: number = 0;
  FacultadResponsable: string = "";

  sistemaSeleccionada: any;
  nivelSeleccionSeleccionada: any;
  nivelInicioSeleccionada: any;

  public loading: boolean = false;

  constructor(
    private _mensaje: Mensajes,
    private _matriculaService: MatriculaService,
    private _servicioLogin: LoginService,
  ) { }

  ngOnInit() {
    // const identity = JSON.parse(this._servicioLogin.GetIdentity());
    //console.log(identity)
    this.GetMatricula();
  }
  
  // async GetMatricula(id_estudiante: number) {
  //   try {
  //     let response = await lastValueFrom(this._matriculaService.GetSituacionActualTitulacionEstudiante(id_estudiante))
  //     this.matriculaVigenteEstudiante = response.entidad
  //     console.log(this.matriculaVigenteEstudiante)
  //   } catch (e: HttpErrorResponse | any) {
  //     console.log(e);
  //   }
  // }

  onOptionChange(option: string) {
    this.selectedOption = option;
    if (option === 'option1') {
      this.GetMatricula();
    } else if (option === 'option2') {
      this.GetMatriculas();
    }
  }
  
  async GetMatricula() {
    try {
      let identity = JSON.parse(this._servicioLogin.GetIdentity());
      let response = await lastValueFrom(this._matriculaService.GetMatriculaVigenteTitulacionEstudiante(identity.idUsuario))
      this.eMatricula = response.entidad
      console.log(this.eMatricula)
    } catch (e: HttpErrorResponse | any) {
      console.log(e);
    }
  }

  async GetMatriculas() {
    try {
      let identity = JSON.parse(this._servicioLogin.GetIdentity());
      let response = await lastValueFrom(this._matriculaService.GetMatriculasTitulacionEstudiante(identity.idUsuario))
      this.vecMatriculas = response.entidad
      console.log(this.vecMatriculas)
    } catch (e: HttpErrorResponse | any) {
      console.log(e);
    }
  }

  async GetOrdenPagoInfo(idMatricula: number) {
    try {
      let identity = JSON.parse(this._servicioLogin.GetIdentity());
      let response = await lastValueFrom(this._matriculaService.GetOrdenPagoInfo(idMatricula))
      this.eOrdenPagoInfo = response.entidad
      console.log(this.vecMatriculas)
    } catch (e: HttpErrorResponse | any) {
      console.log(e);
    }
  }



  
  async generarPDF(idMatriculaTitulacion: number) {
  
    
    let OrdenPagoInfo = await this.GetOrdenPagoInfo(idMatriculaTitulacion);

    
    // Crear un nuevo objeto jsPDF
    const doc = new jsPDF('p', 'px', 'a4');    
  
    // Agregar el contenido HTML al PDF
    doc.setFontSize(8); // Tamaño de la letra reducido
  
    // Logo de la Universidad
    let logo = new Image();
    logo.src = "./assets/recursos-graficos/logounach.jpeg";
    doc.addImage(logo, 'PNG', 40, 40, 40, 40);
   
    // Configurar el tamaño y la posición del documento
  const pdfWidth = doc.internal.pageSize.width;
  const pdfHeight = doc.internal.pageSize.height;

    // Texto de la Universidad (justificado)
   let nombreUniversidad = ['UNIVERSIDAD NACIONAL DE CHIMBORAZO'];

    // Texto de la Universidad (justificado)
    let textoUniversidad = [
      'Campus Norte "Ms. Edison Riera R.": Avda. Antonio José de Sucre Km. 1 y 1/2',
      'Vía a Guano Teléfono: 37308 Campus "La Dolorosa": Avda. Eloy Alfaro y 10 de',
      'Agosto. Teléfonos: 3730910, Campus "Centro": Duchicela 17-15 y Princesa Toa',
      'Teléfonos: (593-3)3730880-ext.3500'
    ];

    let facultadEstudiante = [this.eOrdenPagoInfo.facultad];
    let carreraEstudiante = ['INGENIERÍA EN TECNOLOGÍAS DE LA INFORMACIÓN (R-A)'];
  
    //Encabezado
    // Lado izquierdo
    doc.setFont('helvetica', 'bold'); // Fuente helvética en negrita
    doc.setFontSize(12); // Tamaño de la letra para títulos
    doc.text(nombreUniversidad[0], 90, 50); // Primer línea con negrita
    doc.setFont('helvetica', 'normal'); // Restaurar la fuente normal para el texto restante
    doc.setFontSize(8); // Tamaño de la letra reducido para el texto restante
    doc.text(textoUniversidad, 90, 60); 
        
    // lado derecho [titulos]
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.text('Orden de Pago N°:', 320, 50);
    doc.text('Fecha de Emisión:', 320, 60);
    doc.text('Fecha de Validez:', 320, 70);

    // lado derecho [información]
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.text([this.eOrdenPagoInfo.idOrden.toString()], 385, 50);
    doc.text('29/07/1998', 385, 60);
    doc.text('29/07/1998', 385, 70);
  
  // Centrar texto de facultadEstudiante
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  const textWidth1 = doc.getTextDimensions(facultadEstudiante[0]).w;
  const startX1 = (pdfWidth - textWidth1) / 2;
  doc.text(facultadEstudiante[0], startX1, 130); // Ajusta la posición vertical según tu diseño

  // Centrar texto de carreraEstudiante
  const textWidth2 = doc.getTextDimensions(carreraEstudiante[0]).w;
  const startX2 = (pdfWidth - textWidth2) / 2;
  doc.text(carreraEstudiante[0], startX2, 145); // Ajusta la posición vertical según tu diseño

  //texto de datos del estudiante
  // lado derecho [titulos]
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.text('Cedula:', 40, 165);
  doc.text('Nombres:', 150, 165);
  doc.text('Ciclo:', 40, 180);
  doc.text('Periodo Académico:', 150, 180);
  doc.text('Código:', 340, 165);

    // Llenar con datos dinámicos
    doc.setFont('helvetica', 'normal');
    doc.text([this.eOrdenPagoInfo.documentoIdentidad],70, 165);
    doc.text([this.eOrdenPagoInfo.nombres+" "+this.eOrdenPagoInfo.apellidoPaterno+" "+this.eOrdenPagoInfo.apellidoMaterno],185, 165);
    doc.text("TITULACION", 70, 180);
    doc.text([this.eOrdenPagoInfo.periodo], 220, 180);
    doc.text([this.eOrdenPagoInfo.idEstudiante.toString()], 370, 165);

    const lineLength = 370; // Longitud de las líneas
    // Calcular las posiciones de las líneas
    const startX = (pdfWidth - lineLength) / 2;
    const endX = startX + lineLength;

    // Posiciones verticales de las líneas
    const startY1 = 202;
    const startY2 = startY1 + 12;
    const startY3 = startY2 + 12;

    // Dibujar las líneas horizontales
    doc.line(startX, startY1, endX, startY1);
    doc.line(startX, startY2, endX, startY2);
    doc.line(startX, startY3, endX, startY3);

    //texto de datos del estudiante
    // lado derecho [titulos]
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.text('Cantidad', 40, 210);
    doc.text('Concepto', 90, 210);
    doc.text('Total', 390, 210);
    doc.text('Total a pagar:', 300, 235);

      // Llenar con datos dinámicos
      doc.setFont('helvetica', 'normal');
      doc.text([this.eOrdenPagoInfo.cantidad?.toString()],40, 222);
      doc.text([this.eOrdenPagoInfo.concepto.toString()],90, 222);
      doc.text([this.eOrdenPagoInfo.total?.toString()], 390, 222);
      doc.text([this.eOrdenPagoInfo.total?.toString()], 390, 235);

    // Guardar y mostrar el PDF
    doc.save('Orden_de_Pago_No_'+idMatriculaTitulacion);
    this.loading = false;
 
  }
  

  
  
  


}
