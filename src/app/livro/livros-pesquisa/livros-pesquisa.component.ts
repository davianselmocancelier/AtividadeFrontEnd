import { LivrosService } from './../livros.service';
import { MessageService, ConfirmationService } from 'primeng/api';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livros-pesquisa',
  templateUrl: './livros-pesquisa.component.html',
  styleUrls: ['./livros-pesquisa.component.css']
})
export class livrosPesquisaComponent implements OnInit {

  livros = [];
  filtro:string;

  constructor(
    private service:LivrosService,
    private msgService: MessageService,
    private conf: ConfirmationService
  ) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar(){
    this.service.pesquisar({nome:this.filtro})
    .then((dados)=>{
      this.livros=dados;
    });
  }

  confirmaExclusao(livro:any){
this.conf.confirm({
  message: 'Tem certeza que deseja excluir?' + livro.uf+'?',
  accept: ()=> {
  this.excluir(livro);
}
});
}

  excluir(livro: any){
    this.service.excluir(livro.id)
    .then(()=>{
      this.pesquisar();
      this.msgService.add({severity:'success', summary:'Exclusão', detail:'livro '+livro.nome+' excluída com sucesso'});
    });
  }





}
