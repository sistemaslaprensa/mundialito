import { Injectable } from '@angular/core';
import { identity } from 'rxjs';
import Swal, { SweetAlertResult } from 'sweetalert2'
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})


export class Mensajes {

  constructor(private router: Router) { }

  MensajeCorrecto(mensaje: string) {
    Swal.fire({
      icon: 'success',
      title: mensaje,
      showConfirmButton: false,
      timer: 1500
    })
  }

  MensajeError(mensaje: string) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: mensaje
    })

  }

  MensajeConfirmacionEliminar(mensaje: string): Promise<SweetAlertResult> {
    return Swal.fire({
      title: 'Estás seguro?',
      text: "No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar'
    })
  }

  MensajeConfirmacionConfirmar(mensaje: string): Promise<SweetAlertResult> {
    return Swal.fire({
      title: mensaje,
      text: "No podrás revertir esta acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, confirmar',
      cancelButtonText: 'Cancelar'
    })
  }

}