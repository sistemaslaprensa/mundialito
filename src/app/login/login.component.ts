import { Component, ViewChild } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { EntidadRespuesta } from '../servicio/comun/EntidadRespuesta';
import { Mensajes } from '../infraestructura/mensajes';
import { AutenticacionService } from '../servicio/autenticacion/autenticacion.service';
import { EntidadUsuario } from '../servicio/autenticacion/EntidadUsuario';
import { EntidadTipoRol } from '../servicio/rol/EntidadTipoRol';
import { EntidadLogin } from '../servicio/login/EntidadLogin';
import { RolService } from '../servicio/rol/rol.service';
import { LoginService } from '../servicio/login/login.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    // public entidadRegistroLogin = new EntidadLogin
    public entidadInicioLogin = new EntidadLogin

    public loading: boolean = false;

    constructor(
        private _servicioTipoRol: RolService,
        private _servicioLogin: LoginService,
        private router: Router,
        private _mensaje: Mensajes
    ) { }

    ngOnInit() {
    }

    async iniciarSesion() {
        try {
            this.loading = true;
            let response = await lastValueFrom(this._servicioLogin.IniciarSesion(this.entidadInicioLogin));

            if (response) {
                localStorage.setItem('identity', JSON.stringify(response.entidad));

                // Obtener el idRol del primer rol asociado al usuario
                const idRol = response.entidad.idRolUsuario[0].idRol;

                // Redirigir según el idRol
                switch (idRol) {
                    case 1: // Si el idRol es 1 (Ejemplo: Estudiante)
                        this.router.navigate(['./estudiante/inicio']);
                        break;
                    case 2: // Si el idRol es 2 (Ejemplo: Administrador)
                        this.router.navigate(['./administrador/inicio']);
                        break;
                    case 3: // Si el idRol es 3 (Ejemplo: Decano)
                        this.router.navigate(['./decano/inicio']);
                        break;
                    case 4: // Si el idRol es 3 (Ejemplo: Decano)
                        this.router.navigate(['./director-carrera/inicio']);
                        break;
                    case 5: // Si el idRol es 3 (Ejemplo: Decano)
                        this.router.navigate(['./secretaria-carrera/inicio']);
                        break;
                    case 6: // Si el idRol es 3 (Ejemplo: Decano)
                        this.router.navigate(['./responsable-carrera/inicio']);
                        break;
                    // Agrega más casos según los roles que tengas
                    default:
                        // Si el idRol no coincide con ninguno de los casos anteriores, muestra un mensaje de error
                        this._mensaje.MensajeError('Rol no reconocido');
                        break;
                }
                // Asignar el mensaje de éxito
                this._mensaje.MensajeCorrecto(response.mensaje);
                console.log(response) //BORRAR
            }
        } catch (e: HttpErrorResponse | any) {
            this.loading = false;
            console.log(e);
            this._mensaje.MensajeError(e.error);
        }
    }
}
