import { Livro } from './model';


import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  livrosURL = 'http://localhost:4242/livros';
  LivrosURLFiltro= this.livrosURL;


  constructor(
    private http: HttpClient
  ) { }

  pesquisar(filtro:any):Promise<any>{
    if(filtro.nome){
      this.LivrosURLFiltro = '/filtro?nome='+filtro.nome;
    }
      else{
        this.LivrosURLFiltro = this.livrosURL;
      }

    return this.http.get<any>(this.LivrosURLFiltro).toPromise();


  }

  excluir(id:number):Promise<void>{
    return this.http.delete(this.livrosURL +'/'+id).toPromise().then(() => null);
  }
  adicionar(cat: Livro): Promise<any>{
    return this.http.post(this.livrosURL,cat).toPromise();


  }
  alterar(Livro: Livro): Promise<any>{
    return this.http.put(this.livrosURL+'/'+Livro.id, Livro)
    .toPromise();

  }
  buscarPorCodigo(codigo: number): Promise<Livro> {
    return this.http.get<Livro>(this.livrosURL+'/'+codigo).toPromise();
  }
}

