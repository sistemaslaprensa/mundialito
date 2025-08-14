export class EntidadInfoSecuenciaPeriodo {
    idSecuenciaPeriodo: number = 0;
    idPeriodo?:  number | null = null;
    periodo: string ="";
    fechaInicio: Date = new Date();
    fechaFin: Date = new Date();
    idPeriodoAnterior?: number | null = null;
    periodoAnterior: string ="";
    idCarrera?:  number | null = null;
    carrera: string ="";
    idFacultad?: number| null = null;
    facultad: string ="";
    estado: string ="";
}