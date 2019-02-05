import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export abstract class GenericoRestService<T> {
  constructor(protected _http: HttpClient, protected actionUrl: string) {}

  lista(): Observable<T[]> {
    return this._http.get(this.actionUrl) as Observable<T[]>;
  }

  listarPorId(id: any): Observable<T> {
    return this._http.get(`${this.actionUrl}${id}`) as Observable<T>;
  }

  salvar(T: any) {
    return !T.id ? (this._http.post(this.actionUrl, T) as Observable<T>) : this.editar(T);
  }

  editar(T: any) {
    return this._http.put(`${this.actionUrl}${T.id}`, T) as Observable<T>;
  }

  deletar(id: any) {
    return this._http.delete(`${this.actionUrl}${id}`) as Observable<T>;
  }
}
