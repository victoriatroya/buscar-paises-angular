import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Country} from "../interfaces/pais.interface";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v3.1';
  private apiRegionUrl: string = 'https://restcountries.com/v2';

  get  httpParams () {
    return  new HttpParams()
      .set('fields', 'name,flags,capital,cca2,population');
  };

  constructor( private http: HttpClient) {}

  buscarPais( termino: string ): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`
    return this.http.get<Country[]>(url, { params: this.httpParams});
  }

  buscarCapital( termino: string ): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`
    return this.http.get<Country[]>(url, { params: this.httpParams});
  }

  paisPorCodigo( termino: string ): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${termino}`
    return this.http.get<Country>(url);
  }

  buscarRegiones(termino: string): Observable<Country[]> {
    const url = `${this.apiRegionUrl}/regionalbloc/${termino}`
    return this.http.get<Country[]>(url,{ params: this.httpParams})
  }
}
