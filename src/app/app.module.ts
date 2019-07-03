import { LivrosCadastroComponent } from './livro/livros-cadastro/livros-cadastro.component';
import { AutoresModule } from './autores/autores.module';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import {ToastModule} from 'primeng/toast';
import { MessageService, ConfirmationService } from 'primeng/api';
import {Routes, RouterModule} from '@angular/router';
import { ButtonModule } from 'primeng/button';
import {SidebarModule} from 'primeng/sidebar';
import { autoressCadastroComponent } from './autores/autores-cadastro/autores-cadastro.component';
import { livrosModule } from './livro/livro.module';
import { livrosPesquisaComponent } from './livro/Livros-pesquisa/Livros-pesquisa.component';


const rotas: Routes = [
  {path: '', redirectTo:'categorias', pathMatch:'full'},
  {path: 'autores', component: autoressCadastroComponent},

  {path: 'livros', component: livrosPesquisaComponent},
  {path: 'livros/novo', component: LivrosCadastroComponent},
  {path: 'livros/:id', component: LivrosCadastroComponent}

];



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    livrosModule,
    HttpClientModule,
    ToastModule,
    RouterModule.forRoot(rotas),
    AutoresModule,
    SidebarModule,
    ButtonModule

  ],
  providers: [
    MessageService,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
