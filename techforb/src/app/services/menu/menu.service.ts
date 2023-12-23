import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import baseUrl from '../helper';
import { Menu } from 'src/app/models/menu/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private apiUrl = baseUrl; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  public getMenuLinks(id: any): Observable<Set<string>> {
    return this.http.get<Set<string>>(`${baseUrl}/menu/${id}`);
  }
}