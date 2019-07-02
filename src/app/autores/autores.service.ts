import { Autores } from './../livro/model';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  autoresURL = 'http://localhost:4242/autores';


  constructor(
    private http: HttpClient
  ) { }


  pesquisar(): Promise<any> {
    return this.http.get<any>(this.autoresURL).toPromise();
  }

  listarId(): Promise<any> {
    return this.http.get<any>('http://localhost:4242/autores').toPromise();
  }

  excluir(id:number):Promise<void>{
    return this.http.delete(this.autoresURL+'/'+id)
    .toPromise()
    .then(() => null);
  }

  adicionar(Autores: Autores): Promise<any>{
    return this.http.post(this.autoresURL, Autores)
    .toPromise();
  }

  alterar(autores: Autores): Promise<any>{
    return this.http.put(this.autoresURL+'/'+autores.id, autores)
    .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Autores> {
    return this.http.get<Autores>(this.autoresURL+'/'+codigo).toPromise();
  }




}
