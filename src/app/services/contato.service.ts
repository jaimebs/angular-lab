import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { GenericoRestService } from './generico.service';

@Injectable({
  providedIn: 'root'
})
export class ContatoService extends GenericoRestService<any> {
  constructor(public http: HttpClient) {
    super(http, `${environment.API_URL}/contatos`);
  }
}
