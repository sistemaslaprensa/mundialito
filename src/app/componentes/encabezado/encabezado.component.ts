import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss']
})
export class EncabezadoComponent {

  @Input() nivel1: string = "";
  @Input() nivel2: string = "";
  @Input() nivel3: string = "";
  @Input() titulo: string = "";
  @Input() subtitulo: string = "";

}
