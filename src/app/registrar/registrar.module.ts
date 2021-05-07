// import { MessagesModule } from 'primeng/messages';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RegistrarComponent, RegistroComponent } from './component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {DialogModule} from 'primeng/dialog';


import { RegistrarService } from './services';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    DialogModule,
    ReactiveFormsModule,

  ],
  declarations: [
    RegistrarComponent,
     RegistroComponent
  ],
  providers: [
    RegistrarService
  ]

})
export class RegistrarModule { }
