import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable, } from '@angular/core';
import { environment } from './global';
import { CabecerasService } from './cabeceras';


const API_URL = environment.API_URL;



@Injectable({
  providedIn: 'root'
})
export class PeticionesService {


  constructor(private http: HttpClient, public _servicioCabeceras:CabecerasService) {}

  public  ejecutarQueryPostsinHeader<T>(query: string, body: any) {
    query = API_URL + query;
    return this.http.post<T>(query, body)
  }

   public  ejecutarQueryPost<T>(query: string, body: any) {
    query = API_URL + query;
    return this.http.post<T>(query, body, {headers:this._servicioCabeceras.Headers()})
  }

  public ejecutarQueryPostAuth<T>(query: string, body: any) {

    query = API_URL + query;
    return this.http.post<T>(query, body, { headers:this._servicioCabeceras.HeadersAuth() })
  }

  public ejecutarQueryGet<T>(query: string) {
    query = API_URL + query;
    return this.http.get<T>(query, { headers:this._servicioCabeceras.Headers()})
  }

  public ejecutarQueryGetAuth<T>(query: string) {

    query = API_URL + query;
    return this.http.get<T>(query, { headers:this._servicioCabeceras.HeadersAuth() })

  }

  public  ejecutarQueryPut<T>(query: string, body:any) {
    query = API_URL + query;
    return this.http.put<T>(query, body,{headers:this._servicioCabeceras.Headers()})
  }

  public ejecutarQueryPutAuth<T>(query: string, body: string) {
    query = API_URL + query;
    return this.http.put<T>(query, body, { headers:this._servicioCabeceras.HeadersAuth() })
  }

  public  ejecutarQueryDelete<T>(query: string) {
    query = API_URL + query;
    return this.http.delete<T>(query, { headers:this._servicioCabeceras.Headers() })

  }

  public  ejecutarQueryDeleteAuth<T>(query: string) {
    query = API_URL + query;
    return this.http.delete<T>(query, { headers:this._servicioCabeceras.HeadersAuth() })

  }



}
