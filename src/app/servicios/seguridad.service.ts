import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloIdentificar } from '../modelos/identificar.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  constructor(private http: HttpClient) { }

  IdentificarCliente(usuario:string, clave:string):Observable<ModeloIdentificar>{
    return this.http.post("http://localhost:3000/identificarCliente", {
      usuario: usuario,
      clave: clave
    },{
      headers: new HttpHeaders({

      })
    })
  }
}
