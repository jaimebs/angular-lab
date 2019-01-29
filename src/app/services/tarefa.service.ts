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
        tarefa: 'Caminhar',
        feito: false
      },
      {
        id: 2,
        tarefa: 'Malhar',
        feito: false
      },
      {
        id: 3,
        tarefa: 'Almoçar',
        feito: false
      }
    ];
  }
}
