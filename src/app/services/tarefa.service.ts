import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericoRestService } from './generico.service';

@Injectable({
  providedIn: 'root'
})
export class TarefaService extends GenericoRestService<any> {
  constructor(public http: HttpClient) {
    super(http, `${environment.API_URL}/tarefas`);
  }
}
