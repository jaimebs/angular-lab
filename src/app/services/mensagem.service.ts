import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {
  constructor() {}

  mensagem(titulo: string, tipo: any) {
    Swal.fire({
      type: tipo,
      title: titulo,
      showConfirmButton: false,
      timer: 2000
    });
  }

  confirmacao(titulo: string, texto: string, tipo: any, callback) {
    Swal.fire({
      title: titulo,
      text: texto,
      type: tipo,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, deletar!',
      cancelButtonText: 'Cancelar!',
      reverseButtons: true
    }).then(result => {
      if (!result.dismiss) {
        callback();
      }
    });
  }
}
