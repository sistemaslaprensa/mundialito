import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
  txt_titulo: string = "Sistema Académico de Titulación"
  txt_subtitulo: string = "Estudiante"
}
