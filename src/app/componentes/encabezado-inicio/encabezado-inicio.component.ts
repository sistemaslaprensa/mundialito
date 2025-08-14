import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-encabezado-inicio',
  templateUrl: './encabezado-inicio.component.html',
  styleUrls: ['./encabezado-inicio.component.scss']
})
export class EncabezadoInicioComponent {
  @Input() titulo: string = "";
  @Input() subtitulo: string = "";
}
