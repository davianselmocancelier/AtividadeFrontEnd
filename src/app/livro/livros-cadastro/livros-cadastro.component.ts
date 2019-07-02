import { FormControl } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Component , OnInit } from '@angular/core';
import { LivrosService } from '../livros.service';
import { ActivatedRoute }from '@angular/router';
import { Livro} from './../model';



@Component({
  selector: 'app-livros-cadastro',

  templateUrl: './livros-cadastro.component.html',
  styleUrls: ['./livros-cadastro.component.css']
})
export class LivrosCadastroComponent implements OnInit {

livro = new Livro();

  constructor(
  private service: LivrosService,
  private messageService: MessageService,
  private rota: ActivatedRoute



  ) { }

  ngOnInit() {
    const codigoLivro = this.rota.snapshot.params['id'];
    if(codigoLivro){
      this.carregarlivro(codigoLivro);
    }
  }

  carregarlivro(id:number){
    this.service.buscarPorCodigo(id)
      .then((data) => {
        this.livro = data;
      }
    );
  }

  alterar(form: FormControl) {
    this.service.alterar(this.livro)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Edição', detail:'Livro '+this.livro.id+' alterada'});
      form.reset();
    });
  }

  salvar(form: FormControl) {
    if(this.editando){
      this.alterar(form);
    }else{
      this.inserir(form);
    }
  }
  inserir(form: FormControl) {
    this.service.adicionar(this.livro)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Cadastro', detail:'livro '+this.livro.id+' cadastrada'});
      form.reset();
    });
  }

  get editando(){
    return Boolean(this.livro.id);
}



}
