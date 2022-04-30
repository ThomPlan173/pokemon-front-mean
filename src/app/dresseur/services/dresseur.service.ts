import { environment } from '../../../environments/environment';
import { dresseur } from '../../core/models/dresseur';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class dresseurService {
  private readonly dresseurPath: string = '/dresseurs';

  constructor(private _http: HttpClient) {}

  get(): Observable<dresseur[]> {
    return this._http.get<dresseur[]>(
      `${environment.apiBaseUrl}${this.dresseurPath}`
    );
  }

  getById(id: number): Observable<dresseur> {
    return this._http.get<dresseur>(
      `${environment.apiBaseUrl}${this.dresseurPath}/${id}`
    );
  }

  create(dresseur: dresseur): Observable<string> {
    return this._http.post<string>(
      `${environment.apiBaseUrl}${this.dresseurPath}`,
      dresseur
    );
  }

  update(dresseur: dresseur): Observable<string> {
    return this._http.put<string>(
      `${environment.apiBaseUrl}${this.dresseurPath}/${dresseur.id}`,
      dresseur
    );
  }

  delete(id: number): Observable<string> {
    return this._http.delete<string>(
      `${environment.apiBaseUrl}${this.dresseurPath}/${id}`
    );
  }
}
