import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Mensajes } from 'src/app/infraestructura/mensajes';
import { LoginService } from 'src/app/servicio/login/login.service';

@Component({
  selector: 'app-responsable-carrera',
  templateUrl: './responsable-carrera.component.html',
  styleUrls: ['./responsable-carrera.component.scss']
})
export class ResponsableCarreraComponent {

  txt_usuario: string = ""
  txt_correoUsuario: string = ""

  txt_nombres: string = ""
  txt_apellidos: string = ""


  constructor(
    private _mensaje: Mensajes,
    private _servicioLogin: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
    let identity = JSON.parse(this._servicioLogin.GetIdentity())
    this.txt_usuario = identity.nombres + ' ' +  identity.apellidoPaterno + ' ' + identity.apellidoMaterno
    this.txt_correoUsuario = identity.correoInstitucional

    this.txt_nombres = identity.nombres 
    this.txt_apellidos = identity.apellidoPaterno + ' ' + identity.apellidoMaterno

    console.log(this.txt_usuario)
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

  CerrarSesion() {
    this._servicioLogin.CerrarSesion()
    this.router.navigate(['./login'])
  }

}
