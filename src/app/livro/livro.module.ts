import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import { RouterModule } from '@angular/router';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

import { LivrosService } from './livros.service';
import { LivrosCadastroComponent } from './livros-cadastro/livros-cadastro.component';
import { livrosPesquisaComponent } from './Livros-pesquisa/Livros-pesquisa.component';


@NgModule({
  declarations: [
    livrosPesquisaComponent,
    LivrosCadastroComponent],
  imports: [
    CommonModule,
    InputTextModule,
    BrowserModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    ConfirmDialogModule,
    ToastModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    livrosPesquisaComponent,
    LivrosCadastroComponent
  ],
  providers: [LivrosService],
})
export class livrosModule { }
