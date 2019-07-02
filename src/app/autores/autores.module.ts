import { autoressCadastroComponent } from './autores-cadastro/autores-cadastro.component';

import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { AutoresService } from './autores.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {DropdownModule} from 'primeng/dropdown';


@NgModule({
  declarations: [autoressCadastroComponent],
  imports: [
    CommonModule,
    DropdownModule,
    ToastModule,
    ButtonModule,
    InputTextModule,
    FormsModule
  ],
  providers: [
    AutoresService
  ],
  exports:[
    autoressCadastroComponent
  ]
})
export class CidadesModule { }
