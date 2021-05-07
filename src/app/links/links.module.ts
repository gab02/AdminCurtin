import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MessagesModule } from 'primeng/messages';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LinksComponent, CrudComponent } from './components';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {DialogModule} from 'primeng/dialog';
import {MatInputModule} from '@angular/material/input';


import { LinksService } from './services';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ButtonModule,
    SidebarModule,
    PanelMenuModule,
    MatCardModule,
    MatExpansionModule
    ,
    MatButtonModule,
    MatTableModule,
    MatInputModule

  ],
  declarations: [
    LinksComponent,
    CrudComponent
  ],
  providers: [
   LinksService
  ]

})
export class LinksModule { }
