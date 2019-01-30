import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  constructor() {}

  lista() {
    return [
      {
        id: 1,
        descricao: 'Caminhar',
        feito: false
      },
      {
        id: 2,
        descricao: 'Malhar',
        feito: false
      },
      {
        id: 3,
        descricao: 'Almoçar',
        feito: false
      }
    ];
  }
}
