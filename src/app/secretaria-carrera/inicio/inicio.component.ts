import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
  txt_titulo: string = "Binvenido Gestión de Secretaría Académica"
  txt_subtitulo: string = "Secretaria"
}
