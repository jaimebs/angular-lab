import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  constructor(private http: HttpClient) {}

  lista(): Observable<any> {
    return this.http.get(`${environment.API_URL}tarefas`);
  }

  salvar(tarefa) {
    return this.http.post(`${environment.API_URL}tarefas`, tarefa);
  }

  editar(tarefa) {
    return this.http.put(`${environment.API_URL}tarefas/${tarefa.id}`, tarefa);
  }

  deletar(id) {
    return this.http.delete(`${environment.API_URL}tarefas/${id}`);
  }
}
