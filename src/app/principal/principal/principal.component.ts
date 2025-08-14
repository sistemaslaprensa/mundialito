import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Mensajes } from 'src/app/infraestructura/mensajes';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent {  
  constructor(
    private router: Router,
    private _mensaje: Mensajes
) { }

ngOnInit() {
}

async iniciarSesionNavegarLibre() {
    this.router.navigate(['./login/login']);
}
  
 txt_titulo: string = "MUNDIALITO"
  txt_subtitulo: string = "Grupo La Prensa"


  isCollapsed: { [key: string]: boolean } = {
    faseGrupos1: true,
    faseGrupos2: true
  };

  partidos = [
    // Aquí puedes agregar los datos de los partidos
    { equipo1: 'MINGA F.C.', equipo2: 'ATLETICO MINERO SC', logo1: './assets/recursos-graficos/logo1.png', logo2: './assets/recursos-graficos/logo1.png', resultado1: 1, resultado2: 2, fecha: 'Hoy 29/06/2024 15:00', estado: 'Por jugar' },
    { equipo1: 'TEAM A', equipo2: 'TEAM B', logo1: './assets/recursos-graficos/logo1.png', logo2: './assets/recursos-graficos/logo1.png', resultado1: 3, resultado2: 1, fecha: 'Hoy 30/06/2024 15:00', estado: 'Por jugar' }
  ];

  toggleCollapse(section: string) {
    this.isCollapsed[section] = !this.isCollapsed[section];
  }

  
  partidos2 = [
  {
    fecha: "29/06/2024 15:00",
    equipo1: { nombre: "Celio F.C.", logo: "./assets/recursos-graficos/logo1.png", goles: 1 },
    equipo2: { nombre: "ATLETICO MINERO SC", logo: "./assets/recursos-graficos/logo1.png", goles: 2 },
    estado: "Por jugar"
  },
  {
    fecha: "30/06/2024 16:00",
    equipo1: { nombre: "EQUIPO 3", logo: "./assets/recursos-graficos/logo1.png", goles: 3 },
    equipo2: { nombre: "EQUIPO 4", logo: "./assets/recursos-graficos/logo1.png", goles: 4 },
    estado: "Por jugar"
  }
];



}


