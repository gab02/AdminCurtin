import { ProfileComponent, PerfilComponent } from './components';
// import { MessagesModule } from 'primeng/messages';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {DialogModule} from 'primeng/dialog';


import { PerfilService } from './services';

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
    PerfilComponent,
    ProfileComponent
  ],
  providers: [
    PerfilService
  ]

})
export class PerfilModule { }
