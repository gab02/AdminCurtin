import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
// import { MessagesModule } from 'primeng/messages';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent, DashComponent } from './components';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';

    import { SidebarModule } from 'primeng/sidebar';
    import { ButtonModule } from 'primeng/button';
    import { PanelMenuModule } from 'primeng/panelmenu';
import { DashboardService } from './services';

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
    MatTableModule
  ],
  declarations: [
    DashboardComponent,
    DashComponent
  ],
  providers: [
    DashboardService
  ]

})
export class DashboardModule { }
