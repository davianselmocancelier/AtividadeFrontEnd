import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AutoresService } from './../autores.service';
import { Autores } from './../../livro/model';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-autores-cadastro',
  templateUrl: './autores-cadastro.component.html',
  styleUrls: ['./autores-cadastro.component.css']
})
export class autoressCadastroComponent implements OnInit {

  autores = new Autores();
  livros = [];

  constructor(
    private service: AutoresService,
    private messageService: MessageService,
    private rota: ActivatedRoute
  ) { }

  ngOnInit() {
    this.pesquisarLivros();
    const codigoAutores = this.rota.snapshot.params['id'];
    if (codigoAutores) {
      this.carregarAutores(codigoAutores);
    }
  }

  carregarAutores(id: number) {
    this.service.buscarPorCodigo(id)
      .then((data) => {
        this.autores = data;
      }
      );
  }

  inserir(form: FormControl) {
    this.service.adicionar(this.autores)
      .then(() => {
        this.messageService.add({ severity: 'success', summary: 'Cadastro', detail: 'autores ' + this.autores.nome + ' cadastrada' });
        form.reset();
      });
  }

  alterar(form: FormControl) {
    this.service.alterar(this.autores)
      .then(() => {
        this.messageService.add({ severity: 'success', summary: 'Edição', detail: 'autores ' + this.autores.nome + ' alterada' });
        form.reset();
      });
  }

  salvar(form: FormControl) {
    if (this.editando) {
      this.alterar(form);
    } else {
      this.inserir(form);
    }
  }

  get editando() {
    return Boolean(this.autores.id);
  }

  pesquisarLivros() {
    this.service.listarId()
      .then((dados) => {
        this.livros = dados
          .map(e => ({ label: e.nome, value: e.id }));
      });
  }

}
