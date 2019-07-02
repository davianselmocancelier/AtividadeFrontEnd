import { livrosModule } from './livro/livro.module';
import { LivrosCadastroComponent } from './Livro/livros-cadastro/livros-cadastro.component';
import { HttpClientModule } from '@angular/common/http';
//import { CategoriasModule } from './categorias/categorias.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
//import { CategoriasCadastroComponent } from './categorias/categorias-cadastro/categorias-cadastro.component';
import {ToastModule} from 'primeng/toast';
import { MessageService, ConfirmationService } from 'primeng/api';
import {Routes, RouterModule} from '@angular/router';
//import { CategoriasPesquisaComponent } from './categorias/categorias-pesquisa/categorias-pesquisa.component';
import { livrosPesquisaComponent } from './livro/livros-pesquisa/livros-pesquisa.component';
import { AutoresModule } from './autores/autores.module';
import { ButtonModule } from 'primeng/button';
import {SidebarModule} from 'primeng/sidebar';
import { AutoresCadastroComponent } from './autores/Autores-cadastro/autores-cadastro.component';



const rotas: Routes = [
  // {path: '', redirectTo:'categorias', pathMatch:'full'},
  {path: 'autores', component: AutoresCadastroComponent},
  // {path: 'categorias', component: CategoriasPesquisaComponent},
  // {path: 'categorias/novo', component: CategoriasCadastroComponent},
 // {path: 'categorias/:id', component: CategoriasCadastroComponent},
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
    //CategoriasModule,
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
