import { Component } from '@angular/core';

@Component({
  selector: 'app-generar-matricula-actual',
  templateUrl: './generar-matricula-actual.component.html',
  styleUrls: ['./generar-matricula-actual.component.scss']
})
export class GenerarMatriculaActualComponent {
  txt_nivel1: string="Nivel 1"
  txt_nivel2: string="Nivel 2"
  txt_nivel3: string="Nivel 3"
  txt_titulo: string = "Titulo actividad"
  txt_subtitulo: string = "Estudiante"
}
