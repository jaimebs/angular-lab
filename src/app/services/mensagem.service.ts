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
}
