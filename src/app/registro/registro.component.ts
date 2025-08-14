import { Component, ViewChild } from '@angular/core';
import { EntidadTipoRol } from '../servicio/rol/EntidadTipoRol';
import { EntidadLogin } from '../servicio/login/EntidadLogin';
import { RolService } from '../servicio/rol/rol.service';
import { LoginService } from '../servicio/login/login.service';
import { Router } from '@angular/router';

import { Mensajes } from 'src/app/infraestructura/mensajes';
import { lastValueFrom } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

import { EntidadRespuesta } from '../servicio/comun/EntidadRespuesta';
import { AutenticacionService } from '../servicio/autenticacion/autenticacion.service';
import { EntidadUsuario } from '../servicio/autenticacion/EntidadUsuario';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {

  @ViewChild('selectRegistro', { static: true }) public selectRegistro: any;
  public vTipoRol: EntidadTipoRol[] = []
  public entidadRegistroLogin = new EntidadLogin
  // public entidadInicioLogin = new EntidadLogin

  public loading: boolean = false;

  constructor(
    private _servicioTipoRol: RolService,
    private _servicioLogin: LoginService,
    private router: Router,
    private _mensaje: Mensajes
  ) { }

  ngOnInit() {
    this.ObtenerTipoRol()
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

  async ObtenerTipoRol() {
    try {
      let response = await lastValueFrom(this._servicioTipoRol.ListarRol())
      this.vTipoRol = response.entidad

    } catch (e: HttpErrorResponse | any) {
      console.log(e);
    }
  }
    // this.selectRegistro.clearModel(); //eso tener en cuenta para limpiar los campos de un select

  async registrar() {
    // debugger
    try {
      this.loading = true;
  
      let response = await lastValueFrom(this._servicioLogin.Registrar(this.entidadRegistroLogin))
      this.loading = false;
      this._mensaje.MensajeCorrecto(response.mensaje);            
      this.entidadRegistroLogin = new EntidadLogin();      
      this.router.navigate(['/login']); 

    } catch (e: HttpErrorResponse | any) {
      this.loading = false;
      console.log(e);
      this._mensaje.MensajeError(e.error);//, e.error, e.status , e.message);
    }
  }

}


